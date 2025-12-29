import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { TbPoint } from "react-icons/tb";
import image1 from "../../Assets/new_image2.jpeg";
import image2 from "../../Assets/new_image7.jpeg";
import image3 from "../../Assets/new_image3.jpeg";
import image5 from "../../Assets/image5.jpg";
import image7 from "../../Assets/image7.jpg";
import image8 from "../../Assets/image8.jpg";

function AboutCard() {
  return (
    <div>
      <Carousel className="about-carousel" controls={false} indicators={false} interval={2000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Slide 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Slide 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image7} alt="Slide 7" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image8} alt="Slide 8" />
        </Carousel.Item>
      </Carousel>
      <Card className="quote-card-view">
        <Card.Body>
        <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hey there! I'm <span className="purple">Luo</span>, and I’m from <span className="purple">Wilton, CT</span>. 
              I recently graduated with a Bachelor's Degree of Science in <span className="purple">Computer Science</span> from 
              <span className="purple"> Santa Clara University</span> and I'm currently working as a Software Engineer at <span className="purple">Travelers</span>.
              <br />
              <br />
              Outside of work, I'm into <span className="purple">basketball</span>, <span className="purple">travel</span>, and <span className="purple">fashion</span>. 
              Basketball's something I've played my whole life and it's how I met some of my best friends and helps me stay grounded. 
              I love exploring new places and cultures, so I'm always open to travel recs. 
              And fashion's just another way I like to be creative when I'm not writing code.
              <br />
              <br />
              That same creativity drives what I build. I love tackling problems across different domains—whether it's an <span className="purple">Outfit Generator</span> for 
              managing my wardrobe, a <span className="purple">Trip Planner App</span> for organizing travels, or sports analytics like <span className="purple">training predictive models</span> on soccer players 
              player archetypes for <span className="purple">Bay FC (NWSL)</span>. No matter the space, I'm always looking for new challenges and interesting problems to solve.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
