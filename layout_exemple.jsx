import React from "react";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import "./style.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="layout">
        <div className="container">
          <div className="content">{children}</div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    </>
  );
}
