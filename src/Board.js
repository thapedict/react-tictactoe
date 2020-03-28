import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
    cells = [1,2,3,4,5,6,7,8,9];

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

    getPlayer() {
        return this.state.player;
    }

    clicked(key) {
        this.changePlayer();
        this.props.clicked(key);
    }

    render() {
        const cellItems = this.cells.map((v) =>
            <Cell key={v.toString()} id={v} getPlayer={this.getPlayer.bind(this)} clicked={this.clicked.bind(this)} />
        );

        return (
            <div className="Board">
                {cellItems}
            </div>
        )
    }
}

export default Board;