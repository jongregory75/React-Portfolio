import React from "react";
import { Container } from "react-bootstrap";

function Resume() {
  return (
    <Container>
      <div className="p-3">
        <h1>Resume</h1>
        <a
          href="../assets/docs/Jon_Gregory_Software_Resume.pdf"
          className=" ml-2 icon"
        >
          Jon Gregory Resume
          <i className="fas fa-download"></i>
        </a>
      </div>
    </Container>
  );
}
export default Resume;
