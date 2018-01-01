const path = require('path');
const Nuxt = require('nuxt').Nuxt;

const config = require(path.join(think.ROOT_PATH, './nuxt.config.js'));
config.dev = false;
const nuxt = new Nuxt(config);

module.exports = {
  controller: {
    get nuxt() {
      return this.ctx.ssr;
    }
  },
  context: {
    async nuxt() {
      const ctx = this.ctx;
      await nuxt.renderRoute(ctx.url)
        .then(({ html, error, redirected }) => {
          // `html` will be always a string

          // `error` not null when the error layout is displayed, the error format is:
          // { statusCode: 500, message: 'My error message' }

          // `redirected` is not `false` when `redirect()` has been used in `data()` or `fetch()`
          // { path: '/other-path', query: {}, status: 302 }
          if (error) {
            ctx.throw(error.message, error.statusCode);
            return;
          }
          if (redirected) {
            let redirectPath = redirected.path;
            const queryArr = Object.keys(redirected.query);
            if (queryArr.length) {
              redirectPath += `?${queryArr.map(el => el + '=' + redirected.query[el])}`;
            }
            ctx.status = redirected.status || 302;
            ctx.redirect(redirectPath);
            return;
          }
          ctx.body = html;
        });
    }
  }
};
