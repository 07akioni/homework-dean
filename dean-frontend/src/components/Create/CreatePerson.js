import React from 'react'
import { Form, Input, Button, Select, message } from 'antd'
import axios from 'axios'
import Cookie from 'js-cookie'
const FormItem = Form.Item;
const Option = Select.Option

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

class CreatePerson extends React.Component {
  constructor (props) {
    super(props)
    this.check = this.check.bind(this)
    this.submit = this.submit.bind(this)
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
      method: 'post',
      url: '/person',
      headers: {
        'x-csrf-token': Cookie.get('csrfToken')
      },
      data: values
    }).then(res => {
      message.info('成功创建人员')
    }).catch(err => {
      message.error(`创建人员失败：${ err.response.data.message }`)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={ this.check } hideRequiredMark>
        <FormItem { ...formItemLayout } label="姓名">
        {
          getFieldDecorator('Name', {
            rules: [{
              required: true,
              message: '姓名不能为空'
            }, {
              max: 20,
              message: '名字这么长的吗，爸妈咋起的？'
            }]
          })(<Input/>)
        }
        </FormItem>
        <FormItem { ...formItemLayout } label="身份证号码">
        {
          getFieldDecorator('pID', {
            rules: [{
              required: true,
              message: '身份证号码不能为空'
            }, {
              len: 18,
              message: '身份证号码长度必须为18'
            }, {
              pattern: /^\d+$/,
              message: '身份证号码必须由数字组成'
            }]
          })(<Input/>)
        }
        </FormItem>
        <FormItem { ...formItemLayout } label="性别">
          {
            getFieldDecorator('Gender', {
              rules: [{
                required: true,
                message: '请选择性别'
              }]
            })(<Select placeholder="选择性别">
                  <Option value="0">女</Option>
                  <Option value="1">男</Option>
                </Select>)
          }
        </FormItem>
        <FormItem { ...formItemLayout } label="类型">
          {
            getFieldDecorator('pType', {
              rules: [{
                required: true,
                message: '请选择人员类型'
              }]
            })(<Select placeholder="选择人员类型">
                  <Option value="T">教师</Option>
                  <Option value="S">学生</Option>
                  <Option value="O">其他</Option>
                </Select>)
          }
          
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  }
}

CreatePerson = Form.create()(CreatePerson)

export default CreatePerson