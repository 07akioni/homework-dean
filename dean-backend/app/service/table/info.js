const Service = require('egg').Service

class InfoService extends Service {
  async get () {
    const tables = [
      { name: { en: 'tbPerson', ch: '人员表'} },
      { name: { en: 'tbLesson', ch: '课程描述表'} },
      { name: { en: 'tbTeach', ch: '教师任课表'} },
      { name: { en: 'tbChoice', ch: '学生选课表'} },
      { name: { en: 'tbScore', ch: '学生成绩表'} }
    ]
    for (let table of tables) {
      try {
        table.count = await this.ctx.db[table.name.en].count()
      } catch (err) {
        this.ctx.status = 500
        console.log(err)
      }
    }
    return tables
  }
}

module.exports = InfoService