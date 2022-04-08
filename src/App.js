import Login from "./Login";
import SignUp from "./Signup";
import Home from "./Home";
import React from "react";
import AddBooks from "./AddBooks";
import SeeBooks from "./SeeBooks"
import "./App.css";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import { Switch } from "antd";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route exact path="/seebooks" element={<SeeBooks />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
