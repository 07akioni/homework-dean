import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'Name',
    key: 'Name'
  },
  {
    title: '性别',
    dataIndex: 'Gender',
    key: 'Gender'
  },
  {
    title: '身份证号',
    dataIndex: 'pID',
    key: 'pID'
  }
]

function transformDataSource (data) {
  return data.filter(v => v.pType === 'S').map((v, i) => { return {
    ...v, Gender: v.Gender = 0 ? '女' : '男', key: i
  }})
}

class QueryAllStudent extends React.Component {
  render () {
    return (<Table dataSource={ transformDataSource(this.props.dataSource) } columns={columns} />)
  }
}

export default QueryAllStudent