import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import myImg from "../../Assets/luo_pic.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:andrelong2003@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    
    // Clear form fields and show confirmation
    setName("");
    setEmail("");
    setMessage("");
    setShowConfirmation(true);

    // Hide confirmation after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000);
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            During my junior year of high school, I had the opportunity to take AP Computer Science and I'm so grateful I did because it made me realize how powerful coding was.
              <br />
              <br />As I progressed, I've become proficient in
              <i>
                <b className="purple"> React, Node.js, Python, </b> </i> and <i><b className="purple"> C++ </b> </i>
                which helps me work on both frontend and backend tasks
              
              <br />
              <br />
              I'm interested in&nbsp;
              <i>
                <b className="purple">Software Engineering</b> </i> and <i><b className="purple">Full Stack Development </b> </i>
                 along with areas related to{" "}
                <i><b className="purple">
                  Data Analysis.
                </b> </i>
              
              <br />
              <br />
              I'm always looking to improve, whether it's <i><b className="purple">learning new languages</b></i> or
              <i>
                <b className="purple">
                  {" "}
                  tackling new projects
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>

        {/* Updated Get in Touch section */}
        <Row className="mt-5 justify-content-center">
          <Col md={8}>
            <h1 className="project-heading text-center">
              GET IN <strong className="purple">TOUCH</strong>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="contact-form" style={{ backgroundColor: 'rgba(27, 27, 27, 0.8)' }}>
            <h2 className="contact-title purple text-center">Contact.</h2>
            {showConfirmation && (
              <Alert variant="success" onClose={() => setShowConfirmation(false)} dismissible>
                Your message has been sent successfully!
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="contact-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="contact-input"
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="contact-button">
                  SEND <span className="contact-button-icon">✉</span>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">

            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/howielongs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/luo-long/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/howielong_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
