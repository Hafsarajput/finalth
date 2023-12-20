import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Img from '../assets/imgs/Group 168.png';

function BasicExample() {
  const leftColumnStyles = {
    paddingRight: '60px',
    color: 'white',
  };

  const multiChainStyles = {
    fontSize: '20px',
  };

  const dashboardToolStyles = {
    fontSize: '10px',
  };

  return (
    <div style={{ backgroundColor: '#110915' }}>
      <p style={{ textAlign: 'center', fontSize: '40px', color: 'white' }}>
        The Future of Web3 NoCode
      </p>
      <p style={{ textAlign: 'center', fontSize: '20px', color: '#F1F1F1' }}>
        Web3Makr allows you to incorporate top-ranked blockchain platforms<br /> into your work through the drag and drop feature.
      </p>

      <div className='our-team'>
        <Row className='row align-items-center'>
          <Col xs={6} md={4} className='column'>
            {/* Content for the left section */}
            <div style={leftColumnStyles}>
              <p style={{ ...multiChainStyles, ...leftColumnStyles }}>Multi-chain</p>
              <p style={{ ...dashboardToolStyles, ...leftColumnStyles }}>Dashboard<br />Tool</p>
            </div>
          </Col>
          <Col xs={{ span: 6, order: 2 }} md={{ span: 4, order: 2, offset: 6 }} className='column'>
            {/* Setting order and offset to move the column further right */}
            <img src={Img} width={'400px'} height={'300px'} style={{ padding: '20px' }} alt="Your Image" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BasicExample;
