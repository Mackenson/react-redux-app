import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Subtotal.css'

class Subtotal extends Component{
  render () {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={6}>Subtotal</Col>
          <Col md={6}>{`$${this.props.prices}`}</Col>
        </Row>

      </div>
    );
  }
}

export default Subtotal;
