import React from "react";
import Sidebar from "./Sidebar";
import Bottom from "./component_render_based_on_route";
import "./layoutStyle.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">
        <div className="main-content">{children}</div>
        <Sidebar />
      </div>
      <Bottom />
    </div>
  );
}
