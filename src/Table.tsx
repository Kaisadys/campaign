import React from 'react';
import { Table } from 'antd';
import Tabs from './Tab';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  description: string;
  target_group: string;
  campaign_status:string;
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
    name: `Mobile app coming soon`,
    description: "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
    target_group: `All customers`,
    campaign_status:'Active'
  });
}

const App: React.FC = () => (
  <>
  <Tabs initialTab={0} />
  
  </>
        
);

export default App;