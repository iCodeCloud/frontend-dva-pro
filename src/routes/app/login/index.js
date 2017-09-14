import React from 'react';
import {connect} from 'dva';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
const {create} = Form;

import styles from './index.less';

@connect((state) => {
  return {...state.login};
})

// form创建
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

  // user login form submit
  handleSubmit = (e) => {
    const {validateFields, getFieldsValue} = this.props.form;
    const {dispatch} = this.props;
    validateFields((error) => {
      if (error) {
        return;
      }
      // get form data
      const data = {...getFieldsValue()};
      dispatch({
        type: 'app/login',
        payload: data
      });
    });
  }

  render = () => {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form className={styles['login-form']}>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {required: true, message: '请输入用户名'},
              {min: 5, message: '用户名不能小于5个字符'},
              {max: 20, message: '用户名不能大于20个字符'}
            ],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {required: true, message: '请输入密码'},
              {min: 5, message: '密码不能小于5个字符'},
              {max: 20, message: '密码不能大于20个字符'}
            ],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className={styles['login-form-button']}>
          登&nbsp;&nbsp;&nbsp;&nbsp;录
        </Button>
      </Form>
    );
  }
}
