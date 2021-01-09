import React from 'react';
import './Output.css';

class Output extends React.Component {
    render() {
        return (
            <div>
            <span>{this.props.count}</span>
            <h3>From Output: {this.props.count}</h3>
            </div>
        )
    }
}

export default Output