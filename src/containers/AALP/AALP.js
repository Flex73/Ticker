import React, { Component } from 'react';
import TickerDisplay from '../../components/tickerDisplay/tickerDisplay';
import TickerForm from '../../components/tickerForm/tickerForm';

export default class AALP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [300.60, 350.77, 420.42, 295.70, 375.64, 555.55],
            detail: null,
            timer: null,
            currentCount: (300.00).toFixed(2),
            currentIndex: 0,
            value: 'AALP',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleStreams = this.handleStreams.bind(this);
        this.run = this.run.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.tick.addEventListener('tick', this.handleStreams);
    }

    componentWillUnmount() {
        this.tick.removeEventListener('tick', this.handleStreams);
    }
    
    handleChange(e) {
        this.setState({
            value: e.target.value,
            currentCount: this.state.data[this.state.currentIndex],
        });
    }

    handleStreams(e) {
        console.log('detail>>>', e.detail);
    }

    run(e) {
        e.preventDefault();
        const tick = () => {
            this.tick.dispatchEvent(
                new CustomEvent('tick', {
                    detail: this.state.data[this.state.currentIndex],
                }),
            );
            console.log(this.state.currentIndex);
            console.log(this.state.currentCount);
            this.setState({
                id: new Date().valueOf(),
                currentIndex: (this.state.currentIndex + 1) % this.state.data.length,
                currentCount: (this.state.data[this.state.currentIndex]).toFixed(2),
            });
        }

        const callback = () => {
            if (this.state.data.length > 0) {
                tick();
                this.setState({
                    timer: setTimeout(callback, 3000),
                });
            }
        }
        if (this.state.timer === null) {
            callback();
            console.log(this.state.timer);
        }
    }

    stop(e) {
        e.preventDefault();
        if (this.state.timer !== null) {
            clearTimeout(this.state.timer);
            console.log('STOP');
            this.setState({
                timer: null,
            });
        }
    }

    render() {
        let backgroundColor = '#228B22';
        if (this.state.currentCount[this.state.currentIndex - 1] < this.state.currentCount[this.state.currentIndex] ) {
            backgroundColor = '#FF0000';
        }
        const style = {
            backgroundColor: backgroundColor,
        }
        return (
            <div className={'ticker'} ref={elem => this.tick = elem}>
                <TickerDisplay
                    style={style}
                    value={this.state.value}
                    cost={this.state.currentCount}
                />
                <TickerForm
                    value={this.state.value}
                    onChange={this.handleChange}
                    onRun={this.run}
                    onStop={this.stop}
                />
            </div>
        );
    }
}