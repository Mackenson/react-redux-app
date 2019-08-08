import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

import Aux from '../../hoc/Auxillary'

import './ItemDetails.css'

class ItemDetails extends Component{
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {
    return(
      <Aux>
        <Button
          className='item-details-button'
          bsStyle='link'
          onClick={()=> this.setState({ open: !this.state.open })}
        >
          { this.state.open === false ? 'See' : 'Hide' } Item Details
          { this.state.open === false ? '+':'-' }
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={200}
                height={200}
                alt='thumbnail'
                src='https://i5.walmartimages.com/asr/a0cc3624-a3d2-46fd-81f4-904a8866342c_5.cd6be1bdf757089d4a8fd13d3bb0e73a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff'
              />
              <Media.Body>
                <p>Ps4 one of the best video games in this planet. You should buy it now</p>
                <Row className='show-grid'>
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className='price-strike'>{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}><h2>Qty: 1</h2></Col>
                </Row>
              </Media.Body>
            </Media>
            </div>
        </Collapse>
      </Aux>
    )
  }
}
export default ItemDetails
