import { type FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

import laptopImg from "../../common/assets/about.png";
import AboutCard from "./components/AboutCard";
import Particle from "../../common/components/Particle";
import TechStack from "./components/TechStack";
import ToolStack from "./components/ToolStack";

const About: FC = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechStack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;
