import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";

function ClothesExchangePage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">The Clothes Exchange </strong>
        </h1>
        <p className="project-subheading">
        The Clothes Exchange is a peer-to-peer clothing marketplace built with <strong>React, Node.js, Express, and MongoDB</strong>, designed to promote sustainable fashion through community-driven wardrobe sharing. I implemented the frontend and backend architecture and developed a Jupyter Notebook–based recommendation engine using Nearest Neighbors to suggest similar items.
        </p>

        <Row className="video-section" style={{ justifyContent: "center", marginTop: "30px" }}>
          <Col md={8}>
            <div className="video-border">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/i_mw1waJOLM?si=DV_2pgNJtQ0ewWlk"
                  title="Clothes Exchange Demo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h2 className="project-body-heading">
              <strong className="purple">Project Details</strong>
            </h2>
            <p className="project-body">
            The project was developed using the MERN stack — MongoDB, Express.js, React, and Node.js — offering a full-stack JavaScript environment optimized for rapid development and scalability. The backend was designed using RESTful API principles, featuring custom routes for product CRUD operations, user authentication, and dynamic item filtering. On the frontend, we built modular React components and implemented state management patterns to ensure smooth interaction flows and responsive UI performance across devices.
            </p>
            <p className="project-body">
            Key features include a listing interface with support for image uploads, color and size selection, and secure quantity control, all wired to a MongoDB database for persistence. The app also includes a smart product recommendation component powered by a Python-based Nearest Neighbors model developed in Jupyter Notebook. This model analyzes clothing attributes to suggest similar items to users, bringing an intelligent shopping experience typically seen in larger marketplaces like Depop or Poshmark.
            </p>
            <p className="project-body">
            What set my project apart was the meticulous backend-first approach. Instead of focusing on frontend polish first, we prioritized building clean, well-documented RESTful API endpoints and fully-tested data models. This let us rapidly plug in new frontend components and ensured consistent data validation across routes. We used Postman to validate endpoints early and created a modular Express server architecture that could scale with future features like user profiles, checkout, and item ratings.
            </p>
            <p className="project-body">
            Our team was awarded first place among all Travelers capstone teams, in large part due to our emphasis on planning, architecture, and execution. Judges recognized our backend-first methodology, clean codebase, and thoughtful application of data science. This project not only demonstrated technical excellence across the full stack, but also reflected our ability to collaborate, divide responsibilities, and deliver a product that felt production-ready.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ClothesExchangePage;