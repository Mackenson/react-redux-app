import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class TaxesFee extends Component{
  render () {
    return(
      <Row className='show-grid'>
        <Col md={6}>Est. taxes & fee (Based on 94885)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
export default TaxesFee;
