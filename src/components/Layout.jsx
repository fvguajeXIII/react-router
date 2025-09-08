import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <main style={{ minHeight: "calc(100vh - 64px)", width: "100vw", boxSizing: "border-box", padding: "2rem 0", paddingTop: "90px" }}>
      <Outlet />
    </main>
  </>
);

export default Layout;
