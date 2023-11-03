import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiPhp
} from "react-icons/si";

export default function Skills() {
  return (
    <div style={{ color: 'white' }} className="py-2 ">
      <h1 className="pb-3" style={{ textAlign: 'center' }}>
        My  <strong style={{ color: '#f7797d' }}>Skills</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiPhp />
        </Col>
      </Row>
    </div>
  );
}


