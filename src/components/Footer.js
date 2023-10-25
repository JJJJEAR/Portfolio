import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

function Footer() {
 
  return (
    <Container fluid className="text-white p-4 bg-black" >
      <Row className="text-center ">
        <Col md={4}>
          <h5 className="pt-3">Designed and Developed by Jullajak Saksri</h5>
        </Col>
        <Col md={4}>
          <h5 className="pt-3">jullajak.jj@gmail.com</h5>
        </Col>
        <Col md={4}>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
              <a
                href="https://github.com/JJJEAR"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gitub color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gitub color="white" size={"3rem"} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/"
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