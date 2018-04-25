const Service = require('egg').Service

class ScoreService extends Service {
  async create (score) {
    const db = this.ctx.db
    try {
      if (Array.isArray(score)) {
        await db.tbScore.bulkCreate(score)
      } else {
        await db.tbScore.create(score)
      }
    } catch (err) {
      this.ctx.status = 500
      console.log(err)
      return false
    }
    return true
  }
  async getAll (query) { // 这里出现的异常我觉得可能丢给 controller 层处理比较好？
    let scores, db = this.ctx.db
    try {
      scores = await db.tbScore.findAll({
        attributes: ['Score'],
        include: [{ model: db.tbPerson, attributes: ['Name', 'pID'] }, { model: db.tbLesson, attributes: ['cName', 'cID'] }],
        where: query
      })
    } catch (err) {
      console.log(err)
      throw err
    }
    return scores
  }
}

module.exports = ScoreService