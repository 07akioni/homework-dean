const Service = require('egg').Service

class ChoiceService extends Service {
  async create (choice) {
    const db = this.ctx.db
    try {
      await db.tbChoice.create(choice)
    } catch (err) {
      this.ctx.status = 500
      console.log(err)
      return false
    }
    return true
  }
  async getAll (query) { // 这里出现的异常我觉得可能丢给 controller 层处理比较好？
    let choices, db = this.ctx.db
    try {
      choices = await db.tbChoice.findAll({
        attributes: ['cID'],
        include: [{ model: db.tbPerson, attributes: ['Name', 'pID'] }, { model: db.tbLesson, attributes: ['cName', 'cID'] }],
        where: query,
        order: [['cID']]
      })
    } catch (err) {
      console.log(err)
      throw err
    }
    return choices
  }
}

module.exports = ChoiceService