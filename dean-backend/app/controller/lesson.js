'use strict';

const Controller = require('egg').Controller;

class LessonController extends Controller {
  async get () {
    const { ctx, service } = this
    this.ctx.body = await service.lesson.getAll()
  }
  async post () {
    const { ctx, service } = this
    try {
      this.ctx.body = await this.service.lesson.create(ctx.request.body)
    } catch (err) {
      this.ctx.status = 500
      this.ctx.body = {
        message: err.errors[0].message
      }
    }
  }
}

module.exports = LessonController;
