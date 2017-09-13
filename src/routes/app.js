import React from 'react';
import {connect} from 'dva';
import Login from './Login'
import Dashboard from './Dashboard'
import './App.less';

@connect((state) => {
  return {...state.app};
})

export default class App extends React.Component {
  render = () => {
    const {children} = this.props;
    if (true) {
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
