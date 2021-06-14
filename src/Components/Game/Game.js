import React from 'react';
import { Component } from 'react'
import Board from '../Board/Board'
import './Game.css';


class Game extends Component {
  state = {
    player1: true,
    player2: false, 
    check: true,
  }
  
  handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
    this.setState({
      [firstPlayer]: firstBoolean,
      [secondPlayer]: secondBoolean,
    })
  }
  
  render() {
    const { player1, player2 } = this.state;
    const { userName1, userName2, endgame } = this.props
    return (
      <div className='game'>
        <p>It's {player1 ? userName1 : userName2}'s Turn </p>
        <Board
          turn={this.handleTurn}
          player1={player1}
          player2={player2}
          handleScore={this.props.handleScore}
          endgame={endgame}
        />
      </div>
    )
  }
}

export default Game;