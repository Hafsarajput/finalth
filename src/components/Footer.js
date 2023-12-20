import React from 'react';
import { Nav } from 'react-bootstrap';
import Img6 from '../assets/imgs/Group 170.png';

function AlignmentExample() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    minHeight: '20vh', // Ensure the container covers the full viewport height
    paddingTop: '20px'
  };

  const imgStyle = {
    backgroundColor: 'black',
    maxWidth: '100%',
    height: 'auto',
  };
  const copy = {
    textAlign:'left'
  };

  return (
    <div style={containerStyle}>
      <img src={Img6} alt="Your Image" style={imgStyle} />
      <Nav className="justify-content-center" activeKey="/home" style={{paddingTop:'20px'}}>
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
      </Nav>
      
      <p style={copy}>Copyright 2022 © Web3makr</p>
    </div>
  
  );
}

export default AlignmentExample;
