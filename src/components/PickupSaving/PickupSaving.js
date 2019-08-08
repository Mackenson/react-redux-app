import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
  pickupSaving: {
    textDecoration: 'underline'
  },
  totalSaving: {
    color: 'red',
    fontWeight: 800
  }
}

class PickupSaving extends Component{
  render () {
    const tooltip = <Tooltip id='tooltip'>
        <p>You can save money if you pickup from store!!!</p>
    </Tooltip>
    return(
      <Row className='show-grid'>
        <Col md={6}>
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <div style={styles.pickupSaving}>Pickup Saving</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSaving}>{`$${this.props.prices}`}</Col>
      </Row>
    );
  }
}
export default PickupSaving;
