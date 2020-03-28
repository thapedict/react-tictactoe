import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: 'X'
        }
    }

    changePlayer() {
        let newPlayer = this.state.player === 'X' ? 'O': 'X';

        this.setState({
            player: newPlayer
        })
    }

    render() {
        return (
            <div className="Board">
                <h1 onClick={()=>{this.changePlayer()}}>Board {this.state.player}</h1>
            </div>
        )
    }
}

export default Board;