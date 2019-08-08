import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSaving/PickupSaving';
import TaxesFees from './components/TaxesFee/TaxesFee';
import EstimatedTotals from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      total: 100,
      pickupSaving: -5.89,
      taxesFee: 0,
      estimatedTotal: 0
    }
  }
  render(){
    return (
      <div className='container'>
        <Container className='purchase-card'>
          <Subtotal prices={this.state.total.toFixed(2)} />
          <PickupSavings prices={this.state.pickupSaving} />
          <TaxesFees taxes={this.state.taxesFee.toFixed(2)} />
          <hr />
          <EstimatedTotals prices={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
        </Container>
      </div>
    );
  }
  }

export default App;
