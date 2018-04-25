import React from 'react';
import { connect } from 'dva';
import Query from '../components/Query/'

import { Layout } from 'antd';
const { Content } = Layout;

function IndexPage() {
  return (
    <Content style={{ width: '1020px', margin: 'auto', marginTop: '16px' }}>
      <Query />
    </Content>
  );
}

export default connect()(IndexPage);
