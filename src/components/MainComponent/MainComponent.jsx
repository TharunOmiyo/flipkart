import React from "react";
import Products from "../Products/Products";
import SideNav from "../SideNav/SideNav";
import "./MainComponent.css";

export default function MainComponent() {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <SideNav />
      </div>
      <div className="content-container">
        <Products />
      </div>
    </div>
  );
}
