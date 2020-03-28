import React from 'react';

class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: ''
        }
    }

    handleClick() {
        this.setState({current: this.props.getPlayer()});
    }

    render() {
        return (
            <div className="Cell" onClick={()=>this.handleClick()}>{this.state.current}</div>
        )
    }
}

export default Cell;
