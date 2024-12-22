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
          <img
            className="d-block w-100"
            src={image1}
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Slide 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="Slide 4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image5}
            alt="Slide 5"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image6}
            alt="Slide 6"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image7}
            alt="Slide 7"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image8}
            alt="Slide 8"
          />
        </Carousel.Item>
      </Carousel>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hey everyone, my name is <span className="purple">Luo Long </span>
              and I'm from <span className="purple"> Wilton, CT.</span>
              <br />
              I'm currently a senior studying <span className="purple"> Computer Science</span> at <span className="purple"> Santa Clara University</span>
              <br />
              I have interned as a Software Developer and Quality Assurance Intern at Undercurrent.ai and am running my own startup called{" "}
              <span className="purple">
                <a
                  href="https://www.linkedin.com/company/perfect-fitt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  Perfect Fit
                </a>
              </span>
              <br />
              <br />
              Apart from coding, here are some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <TbPoint /> Basketball
              </li>
              <li className="about-activity">
                <TbPoint /> Traveling
              </li>
              <li className="about-activity">
                <TbPoint /> Fashion
              </li>
            </ul>

          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
