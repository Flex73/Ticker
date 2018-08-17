import React from 'react';
import './tickerDisplay.css';

const TickerDisplay = props => {
    return (
        <div className={'tickerDisplay'}>
            <p>{props.value}:</p>
            <div className={'tickerDisplay__value'} style={props.style}>${props.cost}</div>
        </div>
    )
}

export default TickerDisplay;