import React from 'react'
import { Card, Tabs } from 'antd'
import { connect } from 'dva'
import QueryAllTeacher from './QueryAllTeacher'
import QueryAllStudent from './QueryAllStudent'
import QueryAllLesson from './QueryAllLesson'
import QueryAllTeach from './QueryAllTeach'
import QueryAllChoice from './QueryAllChoice'
import QueryByName from './QueryByName'
import QueryAllScore from './QueryAllScore'
const TabPane = Tabs.TabPane;

class Query extends React.Component {
  constructor (props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleTabChange('1')
  }
  handleTabChange (key) {
    const functionGroup = {
      '1': this.props.fetchAllPerson,
      '2': this.props.fetchAllPerson,
      '3': this.props.fetchAllLesson,
      '5': this.props.fetchAllTeach,
      '6': this.props.fetchAllChoice,
      '7': this.props.fetchAllScore
    }
    if (typeof functionGroup[key] === 'function') {
      functionGroup[key]()
    }
  }
  render () {
    return (
      <Card>
        <Tabs defaultActiveKey="1" onChange={ this.handleTabChange }>
          <TabPane tab="所有教师" key="1"><QueryAllTeacher dataSource={ this.props.person.info }/></TabPane>
          <TabPane tab="所有学生" key="2"><QueryAllStudent dataSource={ this.props.person.info }/></TabPane>
          <TabPane tab="所有课程" key="3"><QueryAllLesson dataSource={ this.props.lesson.info }/></TabPane>
          <TabPane tab="姓名查询" key="4"><QueryByName /></TabPane>
          <TabPane tab="任课关系" key="5"><QueryAllTeach dataSource={ this.props.teach.info }/></TabPane>
          <TabPane tab="选课关系" key="6"><QueryAllChoice dataSource={ this.props.choice.info }/></TabPane>
          <TabPane tab="分数查询" key="7"><QueryAllScore dataSource={ this.props.score.info }/></TabPane>
        </Tabs>
      </Card>
    )
  }
}

Query = connect(({ person, lesson, teach, choice, score }) => {
  return {
    person,
    lesson,
    teach,
    choice,
    score
  }
}, dispatch => {
  return {
    fetchAllPerson: () => dispatch({ type: 'person/fetchAllPerson' }),
    fetchAllLesson: () => dispatch({ type: 'lesson/fetchAllLesson' }),
    fetchAllTeach: () => dispatch({ type: 'teach/fetchAllTeach' }),
    fetchAllChoice: () => dispatch({ type: 'choice/fetchAllChoice' }),
    fetchAllScore: () => dispatch({ type: 'score/fetchAllScore' })
  }
})(Query)

export default Query