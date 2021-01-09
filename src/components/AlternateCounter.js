import React from 'react';

import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';


class AlternateCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <Decrement handleClick={this._decrementBy10} />
                <Output count={this.state.count} />
                <Increment handleClick={this._incrementBy10} />
            </div>
        )
    }

    _incrementBy10 = () => {
        // We're going to use this.setState() to increment the count
       
        alert('Incrementing by 10');

        this.setState({count: this.state.count + 10}, function() {
            console.log('Finished incrementing');
        });
    }

    _decrementBy10 = () => {
        // We're going to use this.setState() to decrement the count
        alert('Decrementing by 10');
        let newState = {
            count: this.state.count - 10
        }
        this.setState(newState, function() {
            console.log('Finished decrementing');
        });
    }

    _doRandomStuff = () => {

    }
}

export default AlternateCounter;