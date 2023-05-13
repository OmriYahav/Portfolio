import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Omri Yahav</span>
            from <span className="purple"> Hod Hasharon, Israel.</span>
            <br />I am a IT Manager at HED-GROUP and  junior DevSecOps Student in Bar-Ilan University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding Motocross
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Mountain Bike 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Growing Green Urban Plants
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Omri Yahav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
