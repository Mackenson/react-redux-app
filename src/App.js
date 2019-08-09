import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import './App.css';

import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSaving/PickupSaving';
import TaxesFees from './components/TaxesFee/TaxesFee';
import EstimatedTotals from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodes from './components/PromoCodes/PromoCodes'

import { handleChange } from './actions/promoCodeAction';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      total: 100,
      pickupSaving: -5.89,
      taxesFee: 0,
      estimatedTotal: 0,
      disabledPromoCode: false
    }
  }
  componentDidMount = () => {
    this.setState({
      taxesFee: (this.state.total + this.state.pickupSaving) * 0.0875
    },
    function () {
      this.setState({
        estimatedTotal: (this.state.total + this.state.pickupSaving + this.state.taxesFee)
      });
    }
  );
  }

  givesDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
        this.setState({
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function () {
          this.setState({
            disabledPromoCode: true
          })
        })
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
            <PromoCodes
              givesDiscount={ () => this.givesDiscountHandler() }
              isDisabled={ this.state.disabledPromoCode }
             />
          </Container>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  })

export default connect(mapStateToProps, { handleChange })(App);
