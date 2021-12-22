import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Sidebar from "./sidebarmail";
import UserContext from "./context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Mailpage() {
    let d = useContext(UserContext)
    console.log(d.su)
    let navigate = useNavigate()
  return (
    <>
      <div class="m_content">
        <div class="navbar">
          <div class="navtitle">Mini Mail APP</div>
          <div class="signout_btn">
            <Link to ="/"class="link_so">
              
              Sign out</Link>
          </div>
        </div>
        <div class="in">
          <Sidebar val={d.su}></Sidebar>
          <div class="main_content">
              <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mailpage;
