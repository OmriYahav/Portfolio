import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
 import FortiGET from "../../Assets/Projects/FortiGET.png";
import Ag from "../../Assets/Projects/Ag.png";
import TracerouteVisualizer from "../../Assets/Projects/Projecttrace1.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ag}
              isBlog={false}
              title=" Availability Agent ⚡ "
              description="Script written in Bash that performs periodic ping checks on a list of hosts and records the results in InfluxDB. The ping results can be visualized using Grafana."
              ghLink="https://github.com/OmriYahav/Availability-Agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TracerouteVisualizer}
              isBlog={false}
              title=" Traceroute Visualizer 🌎"
              description="This project is a web application that allows users to visualize the path that internet packets take from their computer to a specified destination."
              ghLink="https://github.com/OmriYahav/Traceroute-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FortiGET}
              isBlog={false}
              title=" FortiGET ↙️"
              description="This is a Python script that retrieves information from a FortiGate device using its API."
              ghLink="https://github.com/OmriYahav/FotiGET"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
