import React from 'react'
import { Form, Icon,Button, Input, Checkbox, Row, Col } from 'antd'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const FormItem = Form.Item
export class PhoneForm extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请填写手机号！' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="手机号" />
        )}
      </FormItem>
      <FormItem>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请填写验证码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="验证码" />
              )}
            </Col>
            <Col span={12}>
            <Button type="primary">获取验证码</Button>
            </Col>
          </Row>
        
        
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember-me', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>记住我</Checkbox>
        )}
        <a className="login-form-forgot" href="">忘记密码</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
        还没有账号？ <Link to="/login">立即注册</Link>
      </FormItem>
    </Form>
    )
  }
}

PhoneForm.propTypes = {
  form:PropTypes.object,
}

export default Form.create()(PhoneForm)