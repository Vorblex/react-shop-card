import React, { Component } from 'react'
import Card from '../Card'

import './App.css'

export default class extends Component {

  state = {
    cnt: 0,
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
    const { cnt, ...minmax } = this.state

    return (
      <div className="App">
        <div className="container">
        {cnt}
        <Card { ...minmax }
              onChangeCnt={ this.changeCnt }
        />
        </div>
      </div>
    )
  }
}
