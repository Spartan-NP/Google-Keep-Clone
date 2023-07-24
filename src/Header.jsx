import React from "react";
import logo from "./images/booklogo.png";
// import BookIcon from "@material-ui/icons/Book";
import "./css/header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid header__">
        <div className="row">
          <header className=" col-12 header__body">
            <div className="book">
              <img src={logo} alt="logo" />
            </div>
            <h2 className="header__title">Negi Keep</h2>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
