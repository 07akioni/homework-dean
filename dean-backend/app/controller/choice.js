'use strict';

const Controller = require('egg').Controller;

class ChoiceController extends Controller {
  async get () {
    const { ctx, service } = this
    console.log(this.ctx.request.query)
    this.ctx.body = await service.choice.getAll(this.ctx.request.query)
  }
  async post () {
    const { ctx, service } = this
    try {
      // 这个地方应该校验是不是类型为 S，应该新建一个 service 来做这个事
      this.ctx.body = await this.service.choice.create(ctx.request.body)
    } catch (err) {
      this.ctx.status = 500
      this.ctx.body = {
        message: err.errors[0].message
      }
    }
  }
}

module.exports = ChoiceController;
