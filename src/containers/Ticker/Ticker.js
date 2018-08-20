import React, { Component } from 'react';
import TickerStream from '../../components/Streams/TickerStream/TickerStream';
import './Ticker.css';

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: {
                0: [200.60, 210.77, 320.42, 195.70, 275.64, 444.44],
                1: [300.60, 350.77, 420.42, 295.70, 375.64, 555.55],
            },
            timer: null,
            timerId: null,
            currentCount: (200.00).toFixed(2),
            currentIndex: 0,
            value: 'AAPL',
        }

        this.handleChange = this.handleChange.bind(this);
        this.run = this.run.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(() => this.run(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    handleChange(e) {
        switch(e.target.value) {
        case 'AAPL': this.setState({
            value: e.target.value,
            currentCount: this.state.data[0][this.state.currentIndex],
            id: 0,
        });
        break;
        case 'AALP': this.setState({
            value: e.target.value,
            currentCount: this.state.data[1][this.state.currentIndex],
            id: 1,
        });
        break;
        default: this.setState({
            value: e.target.value,
            currentCount: this.state.data[0][this.state.currentIndex],
            id: 0,
        });
        }
    }

    run() {
        if (this.state.data[this.state.id].length > 0 && this.state.timer === null) {
            this.setState({
                currentIndex: (this.state.currentIndex + 1) % this.state.data[this.state.id].length,
                currentCount: (this.state.data[this.state.id][this.state.currentIndex]).toFixed(2),
                timerId: 1,
            });
        }
    }

    stop() {
        if (this.state.timerId !== null) {
            this.setState({
                timer: null,
            });
        }
    }

    render() {
        let backgroundColor = '#228B22';
        if (this.state.currentCount[this.state.currentIndex] < this.state.currentCount[this.state.currentIndex + 1] ) {
            backgroundColor = '#FF0000';
        }
        const style = {
            backgroundColor: backgroundColor,
        }
        return (
            <div className={'ticker'}>
                <TickerStream
                    style={style}
                    value={this.state.value}
                    cost={(this.state.data[this.state.id][this.state.currentIndex]).toFixed(2)}
                    onChange={this.handleChange}
                    onRun={this.run}
                    onStop={this.stop}
                />
            </div>
        );
    }
}