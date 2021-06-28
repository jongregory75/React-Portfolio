import React from "react";
import { Container } from "react-bootstrap";

function Resume() {
  return (
    <Container>
      <div className="p-3">
        <h1>Resume</h1>
        <p>
          Resume:
          <a
            href="/assets/docs/Jon_Gregory_Software_Resume.pdf"
            className=" ml-2 icon"
          >
            Jon Gregory's Resume
            <i class="fas fa-download"></i>
          </a>
        </p>
      </div>
    </Container>
  );
}

export default Resume;
