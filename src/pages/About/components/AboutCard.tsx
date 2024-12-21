import React, { type FC } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard: FC = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jinus Mk </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            <br />
            I am currently employed as a Senior Software Engineer at Cuemath.
            <br />
            <br />
            I completed my BTech in Computer Science and Engineering from TKM College of Engineering, Kollam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Entrepreneurship
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
