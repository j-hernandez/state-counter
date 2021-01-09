import React from 'react';

class Increment extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
                Increment
            </button>
        )
    }

}

export default Increment;

