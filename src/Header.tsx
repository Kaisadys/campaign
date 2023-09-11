import React from "react";
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
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Calender } from "./calender.svg";
import { ReactComponent as Customers } from "./customers.svg";
import { ReactComponent as Services } from "./services.svg";
import "./App.css";

const { Header, Content, Footer } = Layout;

const NavBar: React.FC = () => (
  <Space>
    <Layout className="layout">
      <Header className="header">
        <div className="header-content">
          <Logo />
          <Space>
            <div>
              <HomeOutlined />
              Dashboard
            </div>
            <div>
            <Calender />
              Bookings
            </div>
            <div style={{marginLeft:'50'}}>
              <Customers />
              Customers
            </div>
            <div>
              <Services />
              Services
            </div>
            <div ><Button className="email-button">Buukmenow@gmail.com</Button></div>
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
