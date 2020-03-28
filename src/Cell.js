import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: ''
        }
    }

    render() {
        return (
            <div className="Cell">{this.state.current}</div>
        )
    }
}

export default Cell;
