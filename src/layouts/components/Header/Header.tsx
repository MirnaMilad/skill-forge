import React, { type FC } from "react";
import logo from "../../../assets/images/layout/logo-content.png";

const Header: FC = () => {
  return (
    <header className="d-flex flex-column align-items-start h-25 justify-content-evenly">
      <img src={logo} alt="Logo" className="h-25" />
      <h1>Welcome , Mirna</h1>
    </header>
  );
};

export default Header;
