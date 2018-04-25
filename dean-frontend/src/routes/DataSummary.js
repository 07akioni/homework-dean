import React from 'react';
import { connect } from 'dva';
import TableInfo from '../components/TableInfo'
import { Layout } from 'antd';
const { Content } = Layout;

function IndexPage() {
  return (
    <Content style={{ width: '1020px', margin: 'auto', marginTop: '16px' }}>
      <TableInfo />
    </Content>
  );
}

export default connect()(IndexPage);
