import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { UilGithubAlt, UilFacebookF, UilInstagram } from '@iconscout/react-unicons';
import backgroundImage from '../../img/blur.jpg';

export default function ContactPage() {
  return (
    <div className="page" style={{ background: `url(${backgroundImage})` }}>
      <Container className="d-flex align-items-center justify-content-center" >
        <Card style={{
          width: '500px', boxShadow: '0 0 15px rgba(69, 104, 220, 0.7)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white'
        }}
          className="p-3">
          <Card.Body style={{ textAlign: 'left' }}>
            <Card.Title><h3 style={{ borderBottom: '1px solid white', paddingBottom: '10px' }}>Jullajak Saksri</h3></Card.Title>
            <Card.Text>
              <p style={{ fontSize: '20px', paddingTop: '3px' }}>EnET-C</p>
              <ul style={{ fontSize: '20px' }}>
                <li>Email: jullajak.jj@gmail.com</li>
                <li>Phone: +66 094-557-8118</li>
              </ul>
              <div style={{textAlign:'center'}} >
                <a className='px-5' href="https://github.com/JJJJEAR" target="_blank" rel="noopener noreferrer"><UilGithubAlt size="25"/></a>
                <a className='px-5' href="https://facebook.com/jear.saksri" target="_blank" rel="noopener noreferrer"><UilFacebookF size="25"/></a>
                <a className='px-5' href="https://instagram.com/jj.jear" target="_blank" rel="noopener noreferrer"><UilInstagram size="25"/></a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};