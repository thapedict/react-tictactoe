import React from 'react';
import './App.css';
import Board from './Board';
import PlayerTurn from './PlayerTurn';
import Winner from './Winner';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: 'O',
      winner: false
    }
  }

  clicked(player,cell) {
    this.setState({player: player});
  }

  winner(player) {
    this.setState({winner: player});
  }

  render(){
    let winner = '';
    if(this.state.winner) {
      winner = <Winner winner={this.state.winner} />
    }

    return (
      <div className="App">
        <PlayerTurn player={this.state.player} />
        <Board clicked={this.clicked.bind(this)} winner={this.winner.bind(this)} />
        {winner}
      </div>
    )
  }
}

export default App;
