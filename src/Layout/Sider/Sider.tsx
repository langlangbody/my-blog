import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { observer } from 'mobx-react';

import SearchBar from '@/components/Search';

const { Sider } = Layout;
const { SubMenu } = Menu;
@observer
class SiderBar extends React.Component<{ store: any }> {
  private trigger: any = (bool: boolean) =>
    bool ? (
      <Icon style={{ color: '#1890ff', fontSize: '22px' }} type="menu-unfold" />
    ) : (
      <Icon style={{ color: '#1890ff', fontSize: '22px' }} rotate={180} type="menu-unfold" />
    );

  // @action
  // componentDidUpdate(){
  //   const {AddAsyncRoutes} = this.props.store.PermissionStore
  //   console.log('加载异步路由');
  //   AddAsyncRoutes()
  // }

  render() {
    const { collapsedState, siderThemeState, setCollapsed } = this.props.store.SetTingStore;
    // const {routesAll} = this.props.store.PermissionStore
    // console.log('routesAll',routesAll);

    return (
      <Sider
        trigger={this.trigger(collapsedState)}
        theme={siderThemeState ? 'dark' : 'light'}
        collapsible
        collapsed={collapsedState}
        onCollapse={() => setCollapsed()}
      >
        <div className="logo" style={{ height: '60px', width: '90%', background: 'red', margin: '8px auto' }}>
          <SearchBar />
        </div>
        <Menu theme={siderThemeState ? 'dark' : 'light'} defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderBar;
