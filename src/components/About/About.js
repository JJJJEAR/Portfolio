import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Skills from "./Skill";
import Tools from "./Tools";
import KAP from "../../img/XOsX.gif";
import backgroundImage from '../../img/blur.jpg';
import EducationTimeline from './Timeline'

export default function AboutPage() {
  return (
    <Container fluid className="about-section" style={{ background: `url(${backgroundImage})` }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "12%",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ color:'white',fontSize: "40px", paddingBottom: "20px" }}>
              Know Who <strong style={{ color: 'blue' }}>I'M</strong>
            </h1>
            <div className="mb-0">
              <p style={{color:'white', textAlign: "justify" , fontSize:'25px' }}>
                Hi Everyone, I am <span className="purple">Jullajak Saksri </span>
                from <span className="purple"> KMUTNB</span>
                <br /> I’m a 4 year student in the Bachelor of Engineering <br/>Program in Electronics Engineering Technology.
                <br/>
                I’m interested in interning for the position of <br/>a software engineer and developer.
                <br/>
                <br/>
              </p>
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={KAP} alt="about" className="img-fluid"
            style={{ width: "60%", height: "auto" }} />
          </Col>

        </Row>
        <EducationTimeline/><br/>
        <Skills/><br/>
        <Tools/><br/>
        <Github/>
      </Container>
    </Container>

  );
}

