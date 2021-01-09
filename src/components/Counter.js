import React from 'react';

import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <Decrement handleClick={this.decrement} />
                <Output count={this.state.count} />
                <Increment handleClick={this.increment} />
                <h1>From Counter: {this.state.count}</h1>
            </div>
        )
    }

    increment = () => {
        // We're going to use this.setState() to increment the count
       
       
        this.setState({count: this.state.count + 1}, function() {
            console.log('Finished incrementing');
        });
    }

    decrement = () => {
        // We're going to use this.setState() to decrement the count
  
        let newState = {
            count: this.state.count - 1
        }
        this.setState(newState, function() {
            console.log('Finished decrementing');
        });
    }

    _doRandomStuff = () => {

    }
}

export default Counter;