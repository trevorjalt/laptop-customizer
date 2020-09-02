import React from 'react';
import slugify from 'slugify';
import './App.css';

function Parts(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    const parts = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
        <div key={itemHash} className="feature__item">
            <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={item.name === props.selected[props.feature].name}
            onChange={e => props.updateFeature(props.feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
        </div>
        );
    });
    return parts
}

export default Parts