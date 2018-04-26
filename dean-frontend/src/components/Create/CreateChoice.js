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

class CreateChoice extends React.Component {
  constructor (props) {
    super(props)
    this.check = this.check.bind(this)
    this.submit = this.submit.bind(this)
  }
  check (e) {
    e.preventDefault()
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
      url: '/choice',
      headers: {
        'x-csrf-token': Cookie.get('csrfToken')
      },
      data: {
        pID: values.pID.key,
        cID: values.cID.key
      }
    }).then(res => {
      message.info(`成功设置学生选课：${values.pID.label.split('(')[0]}选择${values.cID.label.split('(')[0]}`)
    }).catch(err => {
      message.error(`设置学生选课失败：${ err.response.data.message }`)
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props)
    return (
      <Form onSubmit={ this.check } hideRequiredMark>
        <FormItem label="学生" { ...formItemLayout }>
          {
            getFieldDecorator('pID', {
              rules: [{
                required: true,
                message: '请选择学生'
              }]
            })(<Select placeholder="选择学生" labelInValue>
            {
              this.props.person.info.filter(v => v.pType === 'S').map((v, i) => <Option value={ v.pID } key={ i }>{ `${v.Name}(${v.pID})` }</Option>)
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
            })(<Select placeholder="选择课程" labelInValue>
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

CreateChoice = Form.create()(CreateChoice)
CreateChoice = connect(({ person, lesson }) => {
  return {
    person,
    lesson
  }
})(CreateChoice)

export default CreateChoice