import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";

export default function Toolstack() {
  return (
    <div style={{ color: 'white' }} className="py-2">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="pb-4 " style={{ textAlign: 'center' }}>
          <strong style={{color:'#FBD786'}}>Tools</strong> I use
        </h1>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <FcLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={{ fontSize: "3rem" }}>
          <SiGithub />
        </Col>        
      </Row>
    </div>
  );
}

