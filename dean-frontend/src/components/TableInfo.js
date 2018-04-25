import React from 'react'
import { connect } from 'dva'
import { Card, Row, Col } from 'antd'
import NumberInfo from 'ant-design-pro/lib/NumberInfo';

class TableInfo extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchTableInfo()
  }
  render () {
    return (
      <Card title="数据概要">
        <Row>
          {
            this.props.tableInfo.info.map(info => {
              return (
                <Col span={4} key={ info.name.en }>
                  <NumberInfo
                    subTitle={ info.name.ch } 
                    suffix="条数据"
                    total={info.count}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Card>
    )
  }
}

export default connect(({ tableInfo }) => {
  return {
    tableInfo
  }
}, dispatch => {
  return {
    fetchTableInfo: () => {
      dispatch({ type: 'tableInfo/fetchTableInfo' })
    }
  }
})(TableInfo)