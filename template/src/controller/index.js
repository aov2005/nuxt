const Base = require('<%= actionPrefix %>base.js');

module.exports = class extends Base {
  async indexAction() {
    await this.nuxt();
  }
};
