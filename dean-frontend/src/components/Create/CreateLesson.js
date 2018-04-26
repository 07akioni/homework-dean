import React from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import Cookie from 'js-cookie'
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};


class CreateLesson extends React.Component {
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
      url: '/lesson',
      headers: {
        'x-csrf-token': Cookie.get('csrfToken')
      },
      data: values
    }).then(res => {
      message.info('成功创建课程')
    }).catch(err => {
      message.error(`创建课程失败：${ err.response.data.message }`)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={ this.check } hideRequiredMark>
        <FormItem label="课程ID"{ ...formItemLayout }>
          {
            getFieldDecorator('cID', {
              rules: [{
                required: true,
                message: '课程ID不能为空'
              }, {
                len: 6,
                message: '课程ID长度必须为6'
              }, {
                pattern: /\d+/,
                message: '课程ID必须由数字组成'
              }]
            })(<Input/>)
          }
        </FormItem>
        <FormItem label="课程名" { ...formItemLayout }>
          {
            getFieldDecorator('cName', {
              rules: [{
                required: true,
                message: '课程名不能为空'
              },
              {
                max: 20,
                message: '名字这么长的吗，谁记得住？'
              }]
            })(<Input/>)
          }
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  }
}

CreateLesson = Form.create()(CreateLesson)


export default CreateLesson