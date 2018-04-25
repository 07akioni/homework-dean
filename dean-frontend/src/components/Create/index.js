import React from 'react'
import { Card, Tabs } from 'antd'
import CreateLesson from './CreateLesson'
import CreatePerson from './CreatePerson'
import CreateTeach from './CreateTeach'
import CreateChoice from './CreateChoice'
import CreateScore from './CreateScore'
import { connect } from 'dva';
const TabPane = Tabs.TabPane;

class Create extends React.Component {
  constructor (props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)
  }
  handleTabChange (key) {
    const functionGroup = {
      '3': () => {
        this.props.fetchAllPerson()
        this.props.fetchAllLesson()
      },
      '4': () => {
        this.props.fetchAllPerson()
        this.props.fetchAllLesson()
      },
      '5': this.props.fetchAllLesson,
    }
    if (typeof functionGroup[key] === 'function') {
      functionGroup[key]()
    }
  }
  render () {
    return (
      <Card>
        <Tabs defaultActiveKey="1" onChange={ this.handleTabChange }>
          <TabPane tab="创建课程" key="1"><CreateLesson /></TabPane>
          <TabPane tab="创建人员" key="2"><CreatePerson /></TabPane>
          <TabPane tab="教师任课" key="3"><CreateTeach /></TabPane>
          <TabPane tab="学生选课" key="4"><CreateChoice /></TabPane>
          <TabPane tab="学生成绩" key="5"><CreateScore /></TabPane>
        </Tabs>
      </Card>
    )
  }
}

Create = connect(({ person, lesson }) => {
  return {
    person,
    lesson
  }
}, dispatch => {
  return {
    fetchAllPerson: () => dispatch({ type: 'person/fetchAllPerson' }),
    fetchAllLesson: () => dispatch({ type: 'lesson/fetchAllLesson'})
  }
})(Create)

export default Create