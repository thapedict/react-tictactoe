import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: 'X'
        }
    }

    render() {
        return (
            <div className="Board">
                <h1>Board {this.state.player}</h1>
            </div>
        )
    }
}

export default Board;