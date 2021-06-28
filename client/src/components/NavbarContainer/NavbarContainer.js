import React from "react";
import "./NavbarContainer.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Portfolio from "../Portfolio/Portfolio";

function NavbarContainer() {
  return (
    <>
      <Navbar>
        <h1>Jon Gregory</h1>
        <Nav className="justify-content-end" as="ul">
          <Nav.Item as="li" className="Navbar">
            <Nav.Link eventKey="About" href="/About">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="Navbar">
            <Nav.Link eventKey="Portfolio" href="/Portfolio">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="Navbar">
            <Nav.Link eventKey="ContactMe" href="/Contact">
              Contact Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="Navbar">
            <Nav.Link eventKey="Resume" href="/Resume">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarContainer;
