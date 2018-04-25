const Service = require('egg').Service

class TeachService extends Service {
  async create (teach) {
    try {
      await this.ctx.db.tbTeach.create(teach)
    } catch (err) {
      console.log(err)
      throw err
    }
    return true
  }
  async getAll () { // 这里出现的异常我觉得可能丢给 controller 层处理比较好？
    let teachs, db = this.ctx.db
    try {
      teachs = await db.tbTeach.findAll({
        attributes: ['cID'],
        include: [{ model: db.tbPerson, attributes: ['Name', 'pID'] }, { model: db.tbLesson, attributes: ['cName', 'cID'] }],
        order: [['cID']]
      })
    } catch (err) {
      console.log(err)
      throw err
    }
    return teachs
  }
}

module.exports = TeachService