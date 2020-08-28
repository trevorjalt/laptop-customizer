import React from 'react';
import Cost from './Cost';
import './App.css';
import Total from './Total';

function Summary(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Cost
                selected={props.selected}
                USCurrencyFormat={USCurrencyFormat}
            
            />
            <Total
                selected={props.selected} 
                USCurrencyFormat={USCurrencyFormat}
            
            />
           
          
        </section>

    )

}

export default Summary
