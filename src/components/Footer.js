import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

function Footer() {

  return (
    <Container fluid className="text-white p-4 bg-black" >
      <Row className="text-center ">
        <Col md={4}>
          <h5 className="pt-3">Designed and Developed by</h5><br />
          <p >6303051623152 EnET-C<br /> Jullajak Saksri </p>
        </Col>
        <Col md={4}>
          <h5 className="pt-3">jullajak.jj@gmail.com</h5>
        </Col>
        <Col md={4}>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
              <a
                href="https://github.com/JJJJEAR"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/jear.saksri/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/jullajak-saksri/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/jj.jear/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Insta color="white" size={"3rem"} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;