import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Contact() {
  const [state, setState] = useState({
    subject: "",
    message: "",
  });
  const handleClick = () => {
    window.location.href =
      "mailto:jgregorystrong@gmail.com?subject=" +
      state.subject +
      "&body=" +
      state.message;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Container className="justify-content-center">
      <div className="p-3 col">
        <h1>Email me</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Subject:
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject"
            name="subject"
            value={state.subject}
            onChange={handleInputChange}
          ></input>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Body of email"
            rows="3"
            name="message"
            value={state.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          className="btn bg-primary text-light justify-content-center"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </Container>
  );
}

export default Contact;
