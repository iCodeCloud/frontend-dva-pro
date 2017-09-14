import React from 'react';
import {connect} from 'dva';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
const {create} = Form;

import styles from './Login.less';

@connect((state) => {
  return {...state.app.login};
})

@create({
  mapPropsToFields: (props) => {
    const userName = props.username || '';
    const formData = {};
    if (userName) {
      formData.userName = {value: userName};
    }
    return formData;
  },
})

export default class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render = () => {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles['login-form-forgot']} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
