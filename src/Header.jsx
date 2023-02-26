import React from "react";
import logo from "./image/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1> Keep </h1>
      </div>
    </>
  );
};

export default Header;
