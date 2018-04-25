import React from 'react';
import { connect } from 'dva';
import Create from '../components/Create/'

import { Layout } from 'antd';
const { Content } = Layout;

function IndexPage() {
  return (
    <Content style={{ width: '1020px', margin: 'auto', marginTop: '16px' }}>
      <Create />
    </Content>
  );
}

export default connect()(IndexPage);
