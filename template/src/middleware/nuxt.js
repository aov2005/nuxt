const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('../../nuxt.config');
module.exports = (options, app) => {
  app.nuxt = new Nuxt(nuxtConfig);
  nuxtConfig.dev = app.env === 'development';
  if (nuxtConfig.dev) {
    const builder = new Builder(app.nuxt);
    builder.build();
  }
  const igorePathReg = Array.isArray(options.ignorePath) ? options.ignorePath.map(el => new RegExp(`^${el}`)) : [];
  return async(ctx, next) => {
    for (let i = 0, len = igorePathReg.length; i < len; i++) {
      const el = igorePathReg[i]
      if (el.test(ctx.path)) {
        return next();
      }
    }
    const { res, req } = ctx;

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      app.nuxt.render(req, res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};
