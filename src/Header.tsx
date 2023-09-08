import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  LoadingOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Button, Space } from "antd";
import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

const { Header, Content, Footer } = Layout;

const NavBar: React.FC = () => (
  <Space>
    <Layout className="layout">
      <Header className="header">
        <div>
          <Logo />
          <Space>
            <div>
              <HomeOutlined />
              Dashboard
            </div>
            <div>
              <img src="./calender.png" alt="My Image" />
              Bookings
            </div>
            <div>
              <HomeOutlined />
              Dashboard
            </div>
            <div>
              <HomeOutlined />
              Dashboard
            </div>
            <Button>Buukmenow@gmail.com</Button>
          </Space>
        </div>
      </Header>
      
      {/* <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content> */}
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Space>
);

export default NavBar;
