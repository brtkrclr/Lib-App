import React, {  useState } from "react";
import "./App.css";

import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
function Home() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">About</Menu.Item>
           <Link to="addbooks"> <Menu.Item key="2">Add Books</Menu.Item></Link>
           <Link to="seebooks">  <Menu.Item key="3">See Books</Menu.Item></Link>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <h1 style={{ textAlign: "center" }}>Welcome to Lib-App</h1>
            Wtih this site you can add your books, see the list of registered
            books, delete unwanted books. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur eu arcu in risus faucibus
            convallis eget fringilla velit. Sed congue viverra gravida. Cras
            pellentesque, magna nec elementum faucibus, tellus turpis lacinia
            erat, id varius erat tortor eget erat. Pellentesque suscipit sapien
            et sollicitudin consequat. Quisque ornare et ipsum venenatis
            maximus. Sed massa velit, malesuada id turpis convallis, ultrices
            consequat lectus. Morbi vel fringilla turpis, vitae ultrices libero.
            Morbi nec facilisis arcu. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris sed orci
            eu orci lobortis hendrerit. In at venenatis arcu. Sed libero est,
            molestie et mi eget, sagittis tincidunt urna. Nam tellus nulla,
            varius vulputate porta vel, hendrerit eget nunc. Sed in pellentesque
            ante. Nulla sagittis luctus sodales. In et pharetra elit, vitae
            luctus mi. Mauris a libero egestas ante posuere sodales. Nam viverra
            mi vel dui imperdiet, ac tincidunt enim hendrerit. Aliquam accumsan
            euismod orci eu facilisis. Nam tincidunt eros eu nibh consectetur
            blandit. Integer tempus nisl sit amet sodales hendrerit. Etiam eget
            pretium nibh. Maecenas at sem arcu. Ut non sollicitudin lacus. Cras
            eu erat sapien. Aenean quis laoreet felis.
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
