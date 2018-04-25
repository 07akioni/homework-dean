'use strict';

const Controller = require('egg').Controller;

class TeachController extends Controller {
  async get () {
    const { ctx, service } = this
    this.ctx.body = await service.teach.getAll()
  }
  async post () {
    const { ctx, service } = this
    try {
      // 这个地方应该校验是不是类型为 T，应该新建一个 service 来做这个事
      this.ctx.body = await this.service.teach.create(ctx.request.body)
    } catch (err) {
      this.ctx.status = 500
      this.ctx.body = {
        message: err.errors[0].message
      }
    }
  }
}

module.exports = TeachController;
