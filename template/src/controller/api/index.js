const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success('hello thinkjs');
  }
  testAction() {
    return this.success('hello thinkjs');
  }
};
