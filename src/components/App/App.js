import React, { Component } from 'react'
import Card from '../Card'

import './App.css'

export default class extends Component {

  state = {
    cnt: 1,
    min: 1,
    max: 60
  }

  changeCnt = (cnt) => {
    this.setState( () => {
      return {
        cnt
      }
    })
  }

  render() {

    return (
      <div className="App">
        <div className="container">
        {this.state.cnt}
        <Card { ...this.state }
              onChangeCnt={ this.changeCnt }
        />
        </div>
      </div>
    )
  }
}
