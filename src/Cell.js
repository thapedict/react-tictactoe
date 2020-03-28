import React from 'react';

class Cell extends React.Component {
    clicked = false;

    constructor(props){
        super(props);
        this.state = {
            current: ''
        }
    }

    handleClick() {
        if( this.clicked ) {
            return;
        }

        this.setState({current: this.props.getPlayer()});
        this.props.clicked(this.props.id);

        this.clicked = true;
    }

    render() {
        return (
            <div className="Cell" onClick={()=>this.handleClick()}>{this.state.current}</div>
        )
    }
}

export default Cell;
