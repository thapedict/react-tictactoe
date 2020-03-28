import React from 'react';

export default function PlayerTurn(props){
    let current = props.player === 'X' ? 'O': 'X';

    return <div className="PlayerTurn">Now Playing: {current}</div>
}
