'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async get() {
    const { ctx, service } = this
    this.ctx.body = await service.table.info.get()
  }
}

module.exports = InfoController;
