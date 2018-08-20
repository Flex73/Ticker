import React from 'react';
import PropTypes from 'prop-types';
import TickerDisplay from '../../UI/tickerDisplay/tickerDisplay';
import TickerForm from '../../UI/tickerForm/tickerForm';

const TickerStream = props => {
    return (
        <div className={'ticker'}>
            <TickerDisplay
                style={props.style}
                value={props.value}
                cost={props.cost}
            />
            <TickerForm
                value={props.value}
                onChange={props.onChange}
                onRun={props.onRun}
                onStop={props.onStop}
            />
        </div>
    );
}

TickerStream.propTypes = {
    style: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    onRun: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
};

export default TickerStream;