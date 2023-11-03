import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from 'react-icons/fa';
import HomePage from './Home/Homepage';
import ContactPage from './Contact/ContactPage';
import pdf from "./resume/Resume_Jullajak.pdf";
import About from './About/About';

export default function Navbar() {
    return (
        <BrowserRouter>
            <BootstrapNavbar
                variant="dark"
                expand="md"
                fixed="top"
                style={{
                    width: '76%', borderRadius: '50px',
                    margin: 'auto', marginTop: '15px',
                    boxShadow: '0 0 15px rgba(63, 43, 150, 0.7)'
                }}
            >
                <Container >
                    <BootstrapNavbar.Brand as={NavLink} to="/" style={{ cursor: 'pointer' }}>
                        Jullajak Saksri
                    </BootstrapNavbar.Brand>

                    <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item className="p-2">
                                <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}
                                    className={({ isActive }) => isActive ? "active_menu" : "menu"} >
                                    Home
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="p-2">
                                <NavLink to='/about' style={{ textDecoration: 'none', color: 'white' }}
                                    className={({ isActive }) => isActive ? "active_menu" : "menu"} >
                                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="p-2">
                                <a variant="primary" href={pdf} target="_blank" rel="noopener noreferrer" 
                                style={{textDecoration: 'none', color: 'white'}}>
                                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                                </a>
                            </Nav.Item>
                            <Nav.Item >
                                <a href="https://github.com/JJJJEAR" className="nav-link"
                                    style={{ textDecoration: 'none', color: 'white' }}>
                                    <FaGithub style={{ marginBottom: "2px", marginRight: "5px" }} />Github
                                </a>
                            </Nav.Item>
                            <Nav.Item className="p-2">
                                <NavLink to='/contact' style={{ textDecoration: 'none', color: 'white' }}
                                    className={({ isActive }) => isActive ? "active_menu" : "menu"} >
                                    Contact
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>

            </BootstrapNavbar>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>

    );
};