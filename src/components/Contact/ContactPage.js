import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function ContactPage() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text>
            You can reach out to me using the following methods:
            <ul>
              <li>Email: example@example.com</li>
              <li>Phone: +1 123-456-7890</li>
              {/* Add other contact methods as needed */}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

