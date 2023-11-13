import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import JJJ from "../../img/home.jpg";
import backgroundImage from '../../img/bg.jpg';

import '../../css/Homepage.css';

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
                <a href="https://github.com/JJJJEAR" target="_blank" className="social-icons me-3" rel="noreferrer" >
                  <img src={Github} alt="GitHub Logo" style={{ width: '75px', height: '75px' }} />
                </a>
                <a href="https://www.linkedin.com/in/jullajak-saksri/" target="_blank" className="social-icons me-3" rel="noreferrer" >
                  <img src={LinkedIn} alt="LinkedIn Logo" style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://www.instagram.com/jj.jear/" target="_blank" rel="noreferrer" >
                  <img src={Instagram} alt="Instagram Logo" style={{ width: '60px', height: '60px' }} />
                </a>
              </div>
            </Col>
            <Col md={7} className="home-header pt-5">
              <img src={JJJ} alt="Hello" style={{ width: 'auto', height: '85%' }}/>
              
            </Col>
            <div className="text-center mt-5">
              <a href="/about">
                <button className="btn btn-lg btn-primary btn-rounded rounded-5 ">About Me</button>
              </a>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
