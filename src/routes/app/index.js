import React from 'react';
import {connect} from 'dva';
import Login from './login/index'
import Dashboard from './dashboard/index'
import './index.less';

@connect((state) => {
  return {...state.app};
})

export default class App extends React.Component {
  render = () => {
    const {children, isLogin} = this.props;
    if (!isLogin) {
      return (
        <Login />
      )
    } else {
      return (
        <Dashboard />
      )
    }
  }
}
