import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default Layout;
