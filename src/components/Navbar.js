import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import IMAGE from '../assets/imgs/Group 170.png';

function AlignmentExample() {
    const imgStyle = {
        backgroundColor: 'black',
        maxWidth: '100%',
        height: 'auto',
        alignItems: 'right',
      };
  return (
    <>
      <Nav className="justify-content-end " style={{backgroundColor: '#110915', padding: '20px'}} activeKey="/home">
        <Navbar className="bg-body-tertiary">
        <img src={IMAGE} alt="Your Image" style={imgStyle} />
        </Navbar>
        <Nav.Item>
<Nav.Link href="/home" style={{color: 'white'}}>Web3Makr</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-1" style={{color: 'white'}}>White paper</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2" style={{color: 'white'}}>Services</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2" style={{color: 'white'}}>Tool</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2" style={{color: 'white'}}>Contact</Nav.Link>
</Nav.Item>
<Nav.Item>
<Button variant="outline-info">Start for free</Button>{' '}
</Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;



