import React from 'react'
import { Form, Button, Select, message } from 'antd'
import axios from 'axios'
import { connect } from 'dva';
import Cookie from 'js-cookie'
const FormItem = Form.Item;
const Option = Select.Option

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};


class CreateTeach extends React.Component {
  constructor (props) {
    super(props)
    this.check = this.check.bind(this)
    this.submit = this.submit.bind(this)
  }
  check () {
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (err) {
      } else {
        this.submit(values)
      }
    })
  }
  submit (values) {
    axios({
      method: 'post',
      url: '/teach',
      headers: {
        'x-csrf-token': Cookie.get('csrfToken')
      },
      data: {
        pID: values.pID.key,
        cID: values.cID.key
      }
    }).then(res => {
      message.info(`成功设置教师任课：${values.pID.label.split('(')[0]}担任${values.cID.label.split('(')[0]}课教师`)
    }).catch(err => {
      message.error(`设置教师任课失败：${ err.response.data.message }`)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={ this.check } hideRequiredMark>
        <FormItem label="教师" { ...formItemLayout }>
          {
            getFieldDecorator('pID', {
              rules: [{
                required: true,
                message: '请选择教师'
              }]
            })(<Select labelInValue placeholder="选择教师">
            {
              this.props.person.info.filter(v => v.pType === 'T').map((v, i) => <Option value={ v.pID } key={ i }>{ `${v.Name}(${v.pID})` }</Option>)
            }
          </Select>)
          }
        </FormItem>
        <FormItem label="课程" { ...formItemLayout }>
          {
            getFieldDecorator('cID', {
              rules: [{
                required: true,
                message: '请选择课程'
              }]
            })(<Select labelInValue placeholder="选择课程" onChange={ v => console.log(v) }>
            {
              this.props.lesson.info.map((v, i) => <Option value={ v.cID } key={ i }>{ `${v.cName}(${v.cID})` }</Option>)
            }
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

CreateTeach = Form.create()(CreateTeach)
CreateTeach = connect(({ person, lesson }) => {
  return {
    person,
    lesson
  }
})(CreateTeach)

export default CreateTeach