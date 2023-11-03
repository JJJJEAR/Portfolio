import React from "react";
import Card from "react-bootstrap/Card";

export default function AboutCard() {
    return (
        <Card className="quote-card-view" >
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Jullajak Saksri </span>
                        from <span className="purple"> KMUTNB</span>
                        <br /> I’m a 4 year student in the Bachelor of
                        Engineering Program in Electronics Engineering Technology.
                        <br />
                        I’m interested in interning for the position of a software engineer and developer.
                        <br />
                        <br />

                    </p>
                    
                </blockquote>
            </Card.Body>
        </Card>
    );
}
