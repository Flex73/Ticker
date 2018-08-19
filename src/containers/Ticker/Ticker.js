import React, { Component } from 'react';
import AAPL from '../AAPL/AAPL';
import AALP from '../AALP/AALP';
import './Ticker.css';

export default class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: new Date().valueOf(),
            isActive: true,
        }

        this.getId = this.getId.bind(this);
        this.handleActivePanel = this.handleActivePanel.bind(this);
    }

    getId() {
        console.log(this.state.id);
    }

    handleSelectChange() {
        
    }

    handleActivePanel() {
        if(this.state.isActive) {
            return <AAPL />;
        }
        return <AALP />;
    }

    render() {
        return (
            <div className={'ticker'}>
                {this.handleActivePanel()}
            </div>
        );
    }
}