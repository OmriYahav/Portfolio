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
              title="Availability Agent ⚡"
              description="Script written in Bash that performs periodic ping checks on a list of hosts and records the results in InfluxDB. The ping results can be visualized using Grafana. 🚀"
              ghLink="https://github.com/OmriYahav/Availability-Agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TracerouteVisualizer}
              isBlog={false}
              title="🌎 Traceroute Visualizer 🌐"
              description="This project is a web application that allows users to visualize the path that internet packets take from their computer to a specified destination."
              ghLink="https://github.com/OmriYahav/Traceroute-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FortiGET}
              isBlog={false}
              title="FortiGET"
              description="This is a Python script that retrieves information from a FortiGate device using its API.

              The script imports the necessary libraries, sets the API endpoints, and includes the API key in the headers. Then, it defines the URLs to access the API and makes GET requests to retrieve the desired information."
              ghLink="https://github.com/OmriYahav/FotiGET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
