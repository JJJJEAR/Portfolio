import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <BootstrapNavbar
            variant="dark"
            expand="md"
            fixed="top"
            style={{width: '76%', borderRadius: '50px',
                     margin: 'auto', marginTop: '15px',
                     boxShadow: '0 0 15px rgba(63, 43, 150, 0.7)' }}
        >
            <Container >
                <BootstrapNavbar.Brand as={Link} to="/" style={{ cursor: 'pointer' }}>
                    Jullajak Saksri
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </BootstrapNavbar.Toggle>

                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/about" className="nav-link">
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/resume" className="nav-link">
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <a href="https://github.com/JJJJEAR" className="nav-link">
                            <FaGithub style={{ marginBottom: "2px", marginRight: "5px" }} />Github
                            </a>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;