import React from "react";
import NavbarContainer from "../NavbarContainer/NavbarContainer";
import "./Header.css";
import Portfolio from "../Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <header className="Navbar">
        <NavbarContainer />
      </header>
      <Portfolio />
    </>
  );
}

export default Header;
