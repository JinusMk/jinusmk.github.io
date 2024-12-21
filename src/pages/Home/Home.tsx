import React, { type FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../common/assets/home-main.svg";
import TypewriterText from "../../common/UI/TypeWriterText";
import Particle from "../../common/components/Particle";
import Introduction from "./components/Introduction";

const Home: FC = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                &nbsp;
                <strong className="main-name">JINUS MK</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypewriterText
                  strings={["Frontend Engineer", "Freelancer", "Entrepreneur", "MERN Stack Developer"]}
                  deleteSpeed={60}
                  loop={true}
                />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Introduction />
    </section>
  );
}

export default Home;
