import React, { useRef, useState } from "react";
import "./App.css";
import { Form, Input, Button, Divider } from "antd";
import {  Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setValues({ username });
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setValues({ password });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="title" style={{ textAlign: "center" }}>
          Welcome
        </h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={onChangeUsername}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={onChangePassword}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          OR <Link to="/signup">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
