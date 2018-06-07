import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class Checkout extends Component {
    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', {token, amount: this.props.amount})
        .then(response => {
            console.log('Its working')
        })
    }

    render() {
        return (
            <StripeCheckout 
            token={this.onToken}
            stripeKey='pk_test_7gHcNu1fpQVrWtW9Ki6FIiHP'
            amount={this.props.amount}/>
        )
    }
}