import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
    cells = [0,1,2,3,4,5,6,7,8];

    constructor(props) {
        super(props);
        this.state = {
            player: 'X'
        }

        this.rows = Array.from(this.cells);
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

    checkRow( row, player) {
        if( this.rows[row[0]] === player && this.rows[row[2]] === player && this.rows[row[2]] === player ) {
            return true;
        } else {
            return false;
        }
    }

    checkWinner() {
        const rowSets = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6]
        ];

        const players = ['X', 'O'];

        for( let player of players ) {
            for(let row of rowSets) {
                if( this.checkRow(row, player) ) {
                    this.props.winner(player);
                }
            }
        }
    }

    clicked(key) {
        this.changePlayer();
        this.props.clicked( this.getPlayer(), key );
        this.rows[key] = this.getPlayer();
        this.checkWinner();
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