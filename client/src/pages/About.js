import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="justify-content-center" style={{ height: "100vh" }}>
      <Row>
        <Col sm={3}>
          <div className="">
            <h1>About me</h1>
            <img
              src="/img/self.jfif"
              class="rounded-circle w-100 shadow"
              alt="Me"
            ></img>
          </div>
        </Col>

        <Col sm={8} className="mt-4">
          <p>
            Full stack developer, passionate about technology and continuous
            improvement is seeking a software development role which will assist
            in the corporate strategies to produce positive financial returns.
            Over the past 13 years I have become well versed in operations,
            engineering, and business development of the oil and gas industry. I
            am now taking the skill sets I have acquired over my career and
            integrating them with software engineering.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
