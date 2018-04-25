import React from 'react'
import { Table } from 'antd'
import { Form, Input, Button, message, Divider } from 'antd'
import axios from 'axios'
const FormItem = Form.Item;


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
  },
  {
    title: '类型',
    dataIndex: 'pType',
    key: 'pType'
  }
]

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

function transformDataSource (data) {
  return data.map((v, i) => { return {
    ...v, Gender: v.Gender = 0 ? '女' : '男', key: i, pType: v.pType === 'S' ? '学生' : (v.pType === 'T' ? '教师' : '其他')
  }})
}

class QueryByName extends React.Component {
  constructor (props) {
    super(props)
    this.check = this.check.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      queryed: false,
      persons: []
    }
  }
  check () {
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (err) {
        // do nothing
      } else {
        this.submit(values)
      }
    })
  }
  submit (values) {
    axios({
      method: 'get',
      url: '/person',
      headers: {
        'x-csrf-token': document.cookie.split(';').map(v => v.split('=')).filter(v => v[0] === 'csrfToken')[0][1]
      },
      params: values
    }).then(res => {
      this.setState({
        queryed: true,
        persons: res.data
      })
    }).catch(err => {
      message.error(`查询失败：${ err.response.data.message }`)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
    <div>
      <Form onSubmit={ this.check }>
        <FormItem label="姓名" { ...formItemLayout }>
          {
            getFieldDecorator('Name', {
              rules: [{
                required: true,
                message: '请输入姓名'
              }, {
                max: 20,
                message: '你是外国人吗？名字这么长'
              }]
            })(<Input/>)
          }
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">查询</Button>
        </FormItem>
      </Form>
      {
        this.state.queryed &&
        <Divider>查询结果</Divider>
      }
      {
        this.state.queryed &&
        <Table dataSource={ transformDataSource(this.state.persons) } columns={columns} />
      }
    </div>
    )
  }
}

QueryByName = Form.create()(QueryByName)

export default QueryByName