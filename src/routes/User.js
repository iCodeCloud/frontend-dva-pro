import React from 'react';
import {connect} from 'dva';
import UserListTable from './UserListTable';

@connect((state) => {
  return {...state.user};
})

export default class User extends React.Component {
  render = () => {
    return (
      <div>
        <UserListTable />
      </div>
    );
  }
}
