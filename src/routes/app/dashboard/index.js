import React from 'react';
import {connect} from 'dva';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
import {Link} from 'dva/router';

@connect((state) => {
  return {...state.dashboard};
})

export default class Dashboard extends React.Component {
  render = () => {
    const {children} = this.props;
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo"/>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
                  <Menu.Item key="1">
                    <Link to="/user">用户列表</Link>
                  </Menu.Item>
                  <Menu.Item key="2">用户添加</Menu.Item>
                  <Menu.Item key="3">权限添加</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />日志管理</span>}>
                  <Menu.Item key="5">
                    <Link to="/log">日志列表</Link>
                  </Menu.Item>
                  <Menu.Item key="6">配置ES</Menu.Item>
                  <Menu.Item key="7">配置Kinaba</Menu.Item>
                  <Menu.Item key="8">配置Logstash</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />应用管理</span>}>
                  <Menu.Item key="9">
                    <Link to="/stack">应用列表</Link>
                  </Menu.Item>
                  <Menu.Item key="10">服务列表</Menu.Item>
                  <Menu.Item key="11">容器列表</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
