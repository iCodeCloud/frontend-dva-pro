import React from 'react';
import {connect} from 'dva';
import {Table} from 'antd';


@connect((state) => {
  console.log('state=', state);
  return {...state.user};
})

export default class UserListTable extends React.Component {

  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: '1',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: '2',
  }, {
    title: '电话',
    dataIndex: 'phone',
    key: '3',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: '4',
  }];

  render = () => {
    const {userList} = this.props;
    console.log('userList==', userList);
    userList.map((user) => {
      user.key = user.id;
    });
    return (
      <Table
        dataSource={userList}
        columns={this.columns}/>
    );
  }

}
