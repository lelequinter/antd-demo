import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

const TestComponent = () => {



  return (
    <Layout hasSider>
      <Sider
        // onmo
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{ marginLeft: 70 }}>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: '#fff',
              borderRadius: 4,
            }}
          >
            <p style={{color: "black"}}>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <p key={index} style={{color: "black"}}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </p>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );
};

export default TestComponent;
