import React, { useRef, useState } from "react";
import "./App.css";

import { Layout, Menu, Button, Form, Input, InputNumber, message } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
function Home() {
  const [values, setValues] = useState({
    name: "",
    author: "",
    page: "",
  });

  const onChangeName = (e) => {
    const name = e.target.value;
    setValues({ name });
  };

  const onChangeAuthor = (e) => {
    const author = e.target.value;
    setValues({ author });
  };
  const onchangePage = (e) => {
    const page = e.target.value;
    setValues({ page });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const success = () => {
    message
      .loading("Action in progress..", 1.5)
      .then(() => message.success("Adding finished", 1.5))
      .then(() => message.info("Book successfully added to your list", 1.5));
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Link to="">
              <Menu.Item key="1">About</Menu.Item>
            </Link>
            <Menu.Item key="2">Add Books</Menu.Item>
            <Link to="seebooks">
              {" "}
              <Menu.Item key="3">See Books</Menu.Item>
            </Link>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center" }}>Add Book</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter the name of the book!",
                  },
                ]}
              >
                <Input placeholder="Name of the book" onChange={onChangeName} />
              </Form.Item>
              <Form.Item
                name="Author"
                rules={[
                  {
                    required: true,
                    message: "Please enter the name of the author!",
                  },
                ]}
              >
                <Input placeholder="author" onChange={onChangeAuthor} />
              </Form.Item>
              <Form.Item
                name="page"
                rules={[{ required: true, message: "Please enter # of pages" }]}
              >
                <InputNumber placeholder="page" onChange={onchangePage} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={success}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Lib-App ©2022 Created by Berat
        </Footer>
      </Layout>
    </div>
  );
}

export default Home;
