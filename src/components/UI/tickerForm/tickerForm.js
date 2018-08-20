import React from 'react';
import './tickerForm.css';

const TickerForm = props => {
    return (
        <form>
            <label>Select symbol:</label>
            <br />
            <select value={props.value} onChange={props.onChange}>
                <option value="AAPL">AAPL</option>
                <option value="AALP">AALP</option>
            </select>
            <br />
            <button onClick={props.onRun}>Run</button>
            <button onClick={props.onStop}>Stop</button>
        </form>
    )
}

export default TickerForm;