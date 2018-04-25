'use strict';

const Controller = require('egg').Controller;

class PersonController extends Controller {
  async get () {
    const { ctx, service } = this
    this.ctx.body = await service.person.getAll(this.ctx.request.query)
  }
  async post () {
    const { ctx, service } = this
    try {
      this.ctx.body = await this.service.person.create(ctx.request.body)
    } catch (err) {
      this.ctx.status = 500
      this.ctx.body = {
        message: err.errors[0].message
      }
    }
  }
}

module.exports = PersonController;
