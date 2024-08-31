import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import perfectFit from "../../Assets/Projects/perfectlogo.png";
import suicide from "../../Assets/Projects/suicide.png";
import fitFinder from "../../Assets/Projects/fitfinder.png";
import hotSpots from "../../Assets/Projects/hotspots.png";
import safeBronc from "../../Assets/Projects/SafeBronc.png";
import wordScramble from "../../Assets/Projects/wordscramble.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's what I've been working on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perfectFit}
              title="Perfect Fit"
              description="Perfect Fit is a virtual wardrobe platform that generates outfits for users, built with HTML, React, Express, and Firebase."
              learnMoreLink="/perfect-fit"
              demoLink="https://www.youtube.com/watch?v=zl1kipBwRlE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitFinder}
              title="Fit Finder"
              description="Fit Finder is a key feature of Perfect Fit as it introduces a swiping mechanism, similar to what you might find on popular dating apps."
              learnMoreLink="/fit-finder"
              demoLink="https://www.youtube.com/shorts/woKysMjlTPM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotSpots}
              title="HotSpots"
              description="HotSpot is a location intelligence platform that helps businesses evaluate potential sites thru INRIX Foot Traffic data and Google Maps."
              learnMoreLink="/hotspots"
              demoLink="https://devpost.com/software/hotspots-xs6inz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safeBronc}
              title="SafeBronc"
              description="SafeBronc is a mobile app that enhances safety at events by allowing hosts to create events and track attendees using a QR code system."
              learnMoreLink="/safebronc"
              demoLink="https://devpost.com/software/safebronc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordScramble}
              title="Word Scrambling Game"
              description="I created the word scrambling game using Rust for my Programming Languages final project."
              learnMoreLink="/word-scrambling"
              demoLink="https://www.youtube.com/embed/iMdib4b9BtU?si=Rbql1GAROWk28TiF"
            />
          </Col>

          {/* Add more ProjectCards here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;