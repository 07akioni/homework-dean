import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import DataSummary from './routes/DataSummary';
import CreateData from './routes/CreateData';
import QueryData from './routes/QueryData';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout className="layout">
        <Header style={{ padding: 0 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[history.location.pathname]}
            style={{ lineHeight: '64px', width: '1020px', margin: 'auto' }}
            onClick={ ({ key }) => history.push(key) }
          >
            <Menu.Item key="/">数据概要</Menu.Item>
            <Menu.Item key="/create">数据录入</Menu.Item>
            <Menu.Item key="/query">数据查询</Menu.Item>
          </Menu>
        </Header>
        <Switch>
          <Route path="/" exact component={DataSummary} />
          <Route path="/query" exact component={QueryData} />
          <Route path="/create" exact component={CreateData} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
