const Service = require('egg').Service

class PersonService extends Service {
  async create (person) {
    try {
      await this.ctx.db.tbPerson.create(person)
    } catch (err) {
      console.log(err)
      throw err
    }
    return true
  }
  async getAll (query) { // 这里出现的异常我觉得可能丢给 controller 层处理比较好？
    let persons
    try {
      persons = await this.ctx.db.tbPerson.findAll({
        attributes: ['Name', 'pID', 'Gender', 'pType'],
        where: query
      })
    } catch (err) {
      console.log(err)
      throw err
    }
    return persons
  }
}

module.exports = PersonService