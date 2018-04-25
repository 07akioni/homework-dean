import React from 'react'
import { Form, Input, Button, Select, message } from 'antd'
import axios from 'axios'
import { connect } from 'dva';
const FormItem = Form.Item;
const Option = Select.Option

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 }
};

class CreateScore extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchAllLesson()
    this.state = {
      selected: false,
      students: []
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.check = this.check.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleSelect (value) {
    axios.get('/choice', {
      params: {
        cID: value
      }
    }).then(res => {
      this.setState({
        selected: true,
        students: res.data
      })
    })
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
    const scores = []
    for (let key of Object.keys(values)) {
      if (key === 'cID') continue
      scores.push({
        cID: values.cID,
        pID: key,
        Score: values[key]
      })
    }

    axios({
      method: 'post',
      url: '/score',
      headers: {
        'x-csrf-token': document.cookie.split(';').map(v => v.split('=')).filter(v => v[0] === 'csrfToken')[0][1]
      },
      data: scores
    }).then(res => {
      message.info('成功登记分数')
    }).catch(err => {
      message.error(`登记分数失败：${ err.response.data.message }`)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={ this.check } hideRequiredMark>
        <FormItem label="课程" { ...formItemLayout }>
          {
            getFieldDecorator('cID', {
              rules: [{
                required: true,
                message: '请选择课程'
              }]
            })(<Select placeholder="选择课程" onSelect={ this.handleSelect }>
            {
              this.props.lesson.info.map((v, i) => <Option value={ v.cID } key={ i }>{ v.cName }</Option>)
            }
          </Select>)
          }
        </FormItem>
        {
          this.state.selected &&
          this.state.students.map((v, i) => 
          <FormItem { ...formItemLayout } label={ `${v.tbPerson.Name}(${v.tbPerson.pID})` } key={ i }>
          {
            getFieldDecorator(v.tbPerson.pID, {
              rules: [{
                required: true,
                message: '分数不能为空'
              }, {
                pattern: /^(\d|\.)*$/,
                message: '请输入数字'
              }, {
                max: 5,
                message: '分数能这么大的吗？'
              }]
            })(<Input placeholder="请输入分数"/>)
          }
          </FormItem>)
        }
        {
          this.state.selected &&
          <FormItem wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        }
      </Form>
    );
  }
}

CreateScore = Form.create()(CreateScore)
CreateScore = connect(({ lesson }) => {
  return {
    lesson
  }
}, dispatch => {
  return {
    fetchAllLesson: () => dispatch({ type: 'lesson/fetchAllLesson' })
  }
})(CreateScore)

export default CreateScore