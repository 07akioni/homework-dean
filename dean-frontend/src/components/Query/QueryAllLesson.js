import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '课程编号',
    dataIndex: 'cID',
    key: 'cID'
  },
  {
    title: '课程名称',
    dataIndex: 'cName',
    key: 'cName'
  }
]

function transformDataSource (data) {
  return data.map((v, i) => { return { ...v, key: i } })
}

class QueryAllStudent extends React.Component {
  render () {
    return (<Table dataSource={ transformDataSource(this.props.dataSource) } columns={columns} />)
  }
}

export default QueryAllStudent