import React from 'react';
import { Component } from 'react'
import './Navbar.css';


class Navbar extends Component {
  render() {
    const { player1, player, ties, userName1, userName2 } = this.props;
    return (
      <div className='navbar'>
        <div className='title'>
          <h1>Tic Tac Toe</h1>
        </div>
        <div className='statistics'>
          <h2>
            {userName1}:{player1}
          </h2>
          <h2>
            {userName2}:{player2}
          </h2>
          <h2>Ties: {ties}</h2>
        </div>
      </div>
    )
  }
}

export default Navbar;