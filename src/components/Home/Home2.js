import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import myImg from "../../Assets/Luo_pic.JPEG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import axios from 'axios';

function Home2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState(""); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    try {
      const response = await axios.post('http://localhost:4000/contact', {
        name,
        email,
        message
      });
      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 5000);
      }
    } catch (err) {
      setError("Failed to send message. Please try again later."); // Handle error
    }
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
              I'm an aspiring software engineer passionate about 
              <i><b className="purple"> collaboration, innovation,</b> and 
              <b className="purple"> creating meaningful impact.</b></i>
               {" "}
               I value <i><b className="purple">teamwork, open communication, </b>
               and 
               <b className="purple"> continuous learning</b></i>, 
              while thriving in environments that celebrate <i><b className="purple">creativity, inclusivity, </b>
              and 
              <b className="purple"> shared success.</b></i>
              <br />
              <br />I'm skilled in
              <i>
                <b className="purple"> React, Node.js, Python, </b> </i> and <i><b className="purple"> C++ </b> </i>
                which helps me work on both frontend and backend tasks.
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
                  tackling new projects. 
                  {" "}
                </b>
              </i>
              Feel free to 
              {" "}
              <a 
                href="https://luo-long-portfolio.vercel.app/project" 
                target="_blank" 
                rel="noreferrer" 
                className="purple"
                style={{ textDecoration: "underline" }}
              >
                explore my work
              </a> or connect with me here—I’m always excited to engage and grow together!
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
            {error && (
              <Alert variant = "danger" onClose = {() => setError("")} dismissible>
                {error}
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
