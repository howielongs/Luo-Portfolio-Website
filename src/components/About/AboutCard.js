import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { TbPoint } from "react-icons/tb";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";
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
          <img className="d-block w-100" src={image4} alt="Slide 4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Slide 5" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image6} alt="Slide 6" />
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
              Hi there! My name is <span className="purple">Luo Long</span>, and I’m from <span className="purple">Wilton, CT</span>. 
              I’m currently a senior studying <span className="purple">Computer Science</span> at 
              <span className="purple"> Santa Clara University</span>.
              <br />
              <br />
              I enjoy connecting with people and staying curious through hobbies like fashion, travel, and basketball. <span className="purple">Basketball</span> has always been my universal connector and has been 
              a way for me to bond with others no matter where I go. <span className="purple">Traveling</span> fuels my curiosity and love for new experiences. 
              (If you have any recommendations, I’m all ears!) <span className="purple">Fashion</span> is another passion of mine as it is a creative outlet that lets me express my individuality.
              <br />
              <br />
              Growing up, I spent countless hours playing Pokémon and Super Smash Bros., which sparked my competitive spirit and love for gaming. 
              Over time, I discovered coding as a way to express myself and solve real-world challenges. Whether it's building an <span className="purple">Outfit Generator </span>  
              to manage my wardrobe, designing a <span className="purple">Trip Planner App</span> for my travels, I’m always excited to create and explore. Lately, I’ve especially enjoyed working on sports-related projects like <span className="purple">analyzing performance data </span> for SCU Division 1 athletes or developing player archetypes for <span className="purple">Bay FC (NSWL)</span>
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
