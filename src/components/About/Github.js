import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import toolsLogo from "../../Assets/tools.png";
import devopsLogo from "../../Assets/devops.png";
import devtestLogo from "../../Assets/devtest.png";

function Github() {
  return (
      
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1> Days I <strong className="purple">Code</strong></h1>
      <GitHubCalendar
        username="OmriYahav"
        blockSize={15}
        blockMargin={5}
        color="#33B0FE"
        fontSize={16}
      />
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>

        

      <Col md={12} style={{ paddingBottom: 20 }}>
          <img
          src={devopsLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
         />
         <img
          src={devtestLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
         />
                  
         <img
          src={toolsLogo}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
         />
         </Col>
      </h1>
    </Row>
  );
}

export default Github;
