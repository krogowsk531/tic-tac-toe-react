import React from 'react';
import { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div className='wrapper'>
        <div className='screen'>
          <form>
            <div className='form-group'>
              <label>Name Player 1</label>
              <input
                type='name'
                id='player1'
                className='form-control'
                onChange={this.handleChange}
              />
              <label>Name Player 2</label>
              <input
                type='name'
                id='player2'
                className='form-control'
                onChange={this.handleChange}
              />
            </div>
            
            <button onClick={this.handleClick} className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;