import React from 'react'
import { Component } from 'react'
import './Login.css';


class Endgame extends Component {
  state = {
    tied: 'You are tied',
    playerWin: 'You win ' + this.props.winner + ' !!',
  }
  
  handleClick = () => {
    this.props.endgame(false);
  }
  
  render() {
    const { winner } = this.props;
    const { tied, playerWin } = this.state;
    return (
      <div className='wrapper'>
        <div className='screen'>
          <p> {winner === 'Tied' ? tied : playerWin} </p>
          <button className='btn btn-primary' onClick={this.handleClick}>
            Try Again
          </button>
        </div>
      </div>
    )
  }
}

export default Endgame; 