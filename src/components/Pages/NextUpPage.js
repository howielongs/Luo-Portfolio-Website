import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";

function NextUpPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">NextUp </strong>
        </h1>
        <p className="project-subheading">
        NextUp is a predictive analytics tool built with Python, Pandas, linear regression, and decision trees to support SCU Men's Basketball in identifying star potential.
        </p>

        <Row className="video-section" style={{ justifyContent: "center", marginTop: "30px" }}>
          <Col md={8}>
            <div className="video-border">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/rzDRu0SOqJU?si=ltvwFhOLKaNKmNnI"
                  title="Next Up Demo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
        
                <Row className="mt-4 mb-5 justify-content-center">
        <Col md="auto">
            <a
            href="https://colab.research.google.com/drive/11enpVkQ2WJLKVi4J0U4oQKFbulPjP4KZ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            style={{
                pointerEvents: "auto",
                zIndex: 100,
                opacity: 1,
                position: "relative",
            }}
            >
            Open Colab Notebook
            </a>
        </Col>
        </Row>

        

        



        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h2 className="project-body-heading">
              <strong className="purple">Project Details</strong>
            </h2>
            <p className="project-body">
            The idea for NextUp started when I got the chance to intern with the SCU Athletic Department. While helping organize performance data for the men’s basketball team, I noticed a gap: coaches had tons of physical and game stats, but no system to connect it all or predict a player's true potential. I realized there was an opportunity to bridge analytics and development.
            </p>
            <p className="project-body">
            I pitched the idea to a few classmates and formed a team to build NextUp—a data-driven tool that uses physical performance and in-game stats to identify rising stars and potential pro prospects. I led the project and ensured we stayed aligned using Agile methods like weekly stand-ups and sprint planning.
            </p>
            <p className="project-body">
            One of our biggest challenges was a lack of clean, relevant data. To address it, we pivoted and used NBA Draft Combine metrics to supplement and train our models. By the end, we delivered a working prototype using Python, Pandas, linear regression, and decision trees.
            </p>
            <p className="project-body">
            The result was a tool that gave coaches a clear, visual way to spot athletic spikes and development trends—helping inform training plans and flag players with untapped potential. It showed how data could enhance player development and laid the groundwork for more advanced analytics within the department.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NextUpPage;