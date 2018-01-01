const model = require('think-model');
const ssr = require('../extend/nuxt');
module.exports = [
  model(think.app),
  ssr
];
