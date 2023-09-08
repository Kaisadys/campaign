import React from 'react';
import { Table } from 'antd';
import Tabs from './Tab';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Campaign Title',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Description',
    width: 100,
    dataIndex: 'description',
    key: 'description',
    fixed: 'left',
  },
  {
    title: 'Target Group',
    width: 100,
    dataIndex: 'target',
    key: 'target',
    fixed: 'left',
  },
  {
    title: 'Campaign Status',
    width: 100,
    dataIndex: 'status',
    key: 'status',
    fixed: 'left',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const App: React.FC = () => (
  <>
  <Tabs initialTab={0} />
  
  </>
        
);

export default App;