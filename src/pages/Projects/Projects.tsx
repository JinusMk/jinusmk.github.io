import { type FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import movieMaster from "../../common/assets/projects/movie-master.png";
import letzdance from "../../common/assets/projects/letzdance.png";
import talktative from "../../common/assets/projects/talkative.png";
import portFolioBuilder from "../../common/assets/projects/portfolio-builder.png";
import sprinter from "../../common/assets/projects/sprinter.png";
import Particle from "../../common/components/Particle";
import ProjectCard from "./components/ProjectCard";

const Projects: FC = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={talktative}
              isBlog={false}
              title="Talkative"
              description="A full-stack MERN chat app featuring real-time messaging with Socket.io, JWT-based secure authentication, and MongoDB.Enhanced my proficiency in full-stack development by building a MERN chat application, gaining hands-on experience with real-time messaging using Socket.io, secure authentication practices, and MongoDB data storage."
              ghLink="https://github.com/JinusMk/MERN-Chat-App"
              demoLink="https://mern-chat-app-frontend-phi.vercel.app/login"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={letzdance}
              isBlog={false}
              title="LetzDance"
              description="Developed a PWA for booking online dance classes with React JS and Material UI, featuring Firebase authentication, scheduling, secure payments, user reviews, and progress analytics. Enhanced user engagement with seamless booking and subscription management. Improved retention through user progress analytics and feedback systems."
              ghLink="https://github.com/JinusMk/online-dance-booking-reactjs"
              demoLink="https://letzdance.online/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={sprinter}
              isBlog={false}
              title="Sprinter"
              description="A single page POC React application built with TypeScript, Vanilla-extract for styling, Zustand for state management and Vite JS as a build tool. This application helps the user for better task management and bandwidth evaluation in a Sprint."
              ghLink="https://github.com/JinusMk/sprinter"
              demoLink="https://jinusmk.github.io/sprinter/"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={movieMaster}
              isBlog={false}
              title="Move Master"
              description="A React demo app built with Vite, and Zustand for state management, featuring movie listings, search, pagination, and detailed movie pages."
              ghLink="https://github.com/JinusMk/movie-master"
              demoLink="https://movie-master-pink.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={portFolioBuilder}
              isBlog={false}
              title="Portfolio Builder"
              description="A React-based single-page portfolio builder with customizable sections, light/dark mode, and seamless navigation."
              ghLink="https://github.com/JinusMk/portfolio-builder-reactjs"
              demoLink="https://jinusmk.github.io/portfolio-builder-reactjs/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
