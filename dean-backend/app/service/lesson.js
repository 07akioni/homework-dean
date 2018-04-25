const Service = require('egg').Service

class LessonService extends Service {
  async create (lesson) {
    try {
      await this.ctx.db.tbLesson.create(lesson)
    } catch (err) {
      console.log(err)
      throw err
    }
    return true
  }
  async getAll () { // 这里出现的异常我觉得可能丢给 controller 层处理比较好？
    let lessons
    try {
      lessons = await this.ctx.db.tbLesson.findAll({
        attributes: ['cName', 'cID']
      })
    } catch (err) {
      console.log(err)
      throw err
    }
    return lessons
  }
}

module.exports = LessonService