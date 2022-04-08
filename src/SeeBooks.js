import React, { useState } from "react";
import "./App.css";

import { Layout, Menu, Button, List, Avatar, Skeleton } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function SeeBooks() {
    const [books, setBooks] = useState([]);
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">About</Menu.Item>
            <Menu.Item key="2">Add Books</Menu.Item>
            <Menu.Item key="3">See Books</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center" }}>See List of Books</h1>
            <List
              itemLayout="horizontal"
              dataSource={books}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Lib-App ©2022 Created by Berat
        </Footer>
      </Layout>
    </div>
  );
}

export default SeeBooks;
