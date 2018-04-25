import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '分数',
    dataIndex: 'Score',
    key: 'Score'
  },
  {
    title: '学生',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '课程',
    dataIndex: 'cName',
    key: 'cName'
  }
]

function transformDataSource (data) {
  return data.map((v, i) => { return { Name: v.tbPerson.Name, cName: v.tbLesson.cName, Score: v.Score, key: i } })
}

class QueryAllScore extends React.Component {
  render () {
    return (<Table dataSource={ transformDataSource(this.props.dataSource) } columns={columns} />)
  }
}

export default QueryAllScore