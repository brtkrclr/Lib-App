import React, { useRef, useState } from "react";
import "./App.css";
import { Form, Input, Button, Divider } from "antd";
import { Router,Link } from "react-router-dom";
import Item from "antd/lib/list/Item";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
function Signup() {
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
           <h1 className="title" style={{textAlign: "center"}}>Register Now</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Text>Please select your username</Text>
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
          <Text>Please select your password </Text>
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
            Sign up!
          </Button>
          Or <Link to="/login">Login now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signup;
