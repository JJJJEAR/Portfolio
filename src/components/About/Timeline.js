import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function EducationTimeline() {
    return (
        <div style={{ color: 'white' }} className="py-2  ">
            <h1 className="pb-4" style={{ textAlign: 'center' }}>
            <strong style={{ color: '#12c2e9' }}> Education </strong>Timeline
            </h1>
            <Container className="ps-5">
                <Row className="ps-5">
                    <Col md={3}>
                        <div className="timeline-year ps-5">
                            <h2>Year</h2>
                            <p>2014-2019</p>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="education-details ">
                            <h3>Science - Math</h3>
                            <p>TRIAMUDOMSUKSA PATTANAKARN NONTHABURI SCHOOL</p>
                        </div>
                    </Col>
                </Row>
                <Row className="ps-5">
                    <Col md={3}>
                        <div className="timeline-year ps-5">
                            <h2>Year</h2>
                            <p>2020-2024</p>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="education-details">
                            <h3>Bachelor's Degree in Electronics Engineering Technology</h3>
                            <p>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK.</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

