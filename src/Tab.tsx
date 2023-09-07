// src/components/Tabs.tsx
import React, { useState } from 'react';
import './App.css';
import type { ColumnsType } from 'antd/es/table';
// import { ColumnsType } from 'antd/es/table/interface';

interface TabsProps {
  initialTab: number;
}

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

const Tabs: React.FC<TabsProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-buttons">
        <div 
          onClick={() => handleTabClick(0)}
          className={activeTab === 0 ? 'active' : ''}
          
          >
            Customer Log
          </div>
          
        <div
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? 'active' : ''}
        >
          Campaigns
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>
            Content for Tab 2
            
            </div>}
      </div>
    </div>
  );
};

export default Tabs;
