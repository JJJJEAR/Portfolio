import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";
import backgroundImage from '../../img/bg.jpg';

import '../../css/Homepage.css';
import '../../SignikaFont.css';

export default function HomePage() {
  return (
    <div className="page" style={{ background: `url(${backgroundImage})` }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header pt-5">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, There
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>
              <p className="pt-3">Welcome to my portfolio website</p>
              <h1 className="heading-name pt-3">
                I'M
                <strong className="main-name text-primary"> Jullajak Saksri</strong>
              </h1>
              <div className="social-icons m-5 ">
                <Link to="/github" target="_blank" className="social-icons me-3">
                  <img src={Github} alt="GitHub Logo" style={{ width: '75px', height: '75px' }} />
                </Link>
                <Link to="/linkedin" target="_blank" className="social-icons me-3">
                  <img src={LinkedIn} alt="LinkedIn Logo" style={{ width: '50px', height: '50px' }} />
                </Link>
                <Link to="/instagram" target="_blank" >
                  <img src={Instagram} alt="Instagram Logo" style={{ width: '60px', height: '60px' }} />
                </Link>
              </div>
            </Col>
            <div className="text-center mt-5">
                <Link to="/about" smooth={true} duration={500}>
                  <button className="btn btn-lg btn-primary btn-rounded rounded-5 ">About Me</button>
                </Link>
              </div>
          </Row>
        </Container>  
      </Container>

    </div>
  );
}
