import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";

function TripPlannerPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Trip Planner </strong>
        </h1>
        <p className="project-subheading">
          Trip Planner is a web app platform built with React, Node.js, and Google Maps and Google Places API to help users discover new travel locations.
        </p>

        <Row className="video-section" style={{ justifyContent: "center", marginTop: "30px" }}>
          <Col md={8}>
            <div className="video-border">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/PKwMmVkX-k4?si=6YvLbAsl6ezRD4A4"
                  title="Trip Planner Demo"
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
            The idea for Trip Planner first came to me while planning a trip to Japan with my girlfriend. It was our first trip abroad without our parents, and we had no idea where to go. We spent weeks scrolling through blogs, TikTok videos, and other resources to figure out what spots were worth visiting, which was a long and stressful process. I realized there had to be a better way to simplify trip planning for people like us.
            </p>
            <p className="project-body">
            When I had the opportunity to create a project for my Software Design course, I pitched the idea to my team and convinced them to build Trip Planner. The goal was to create a platform that could suggest locations, help users organize itineraries, and make trip planning faster and more efficient. I led the team throughout the project, ensuring we followed Agile protocols, such as sprint planning and regular stand-ups, to stay on track.
            </p>
            <p className="project-body">
            To start, we created UI mockups and UML diagrams to define the app’s functionality and structure. From there, we developed the core features, including a location search powered by the Google Places API and an interactive map using the Google Maps Platform API. These features allow users to quickly find locations, add them to their itinerary, and see their plans visualized on a dynamic map.
            </p>
            <p className="project-body">
            By the end of the course, we had built a functional version of Trip Planner that significantly reduces the time and stress involved in trip planning. This project not only showcased my technical skills but also highlighted my ability to lead a team, manage timelines, and turn an idea into a practical solution.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TripPlannerPage;