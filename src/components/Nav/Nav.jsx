import React from "react";
import "./Nav.css";
import logo from "../../images/Logo.svg";

const Nav = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </div>
  );
};

export { Nav };
