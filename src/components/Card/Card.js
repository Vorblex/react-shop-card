import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Card.css'

export default class extends Component {

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  state = {
    cnt: this.props.min,
    inputValue: this.props.min
  }

  inc = () => {
    this.setCnt(+this.state.inputValue + 1)
  }

  dec = () => {
    this.setCnt(+this.state.inputValue - 1)
  }

  changeInputValue(inputValue) {
    this.setState({ inputValue })
  }

  setCnt = cnt => {
    const { min, max, onChangeCnt } = this.props

    cnt = Math.min(Math.max(cnt, min), max);
    
    this.setState( {
      cnt,
      inputValue : cnt
    } )

    onChangeCnt( cnt )
  }

  applyCnt = () => {
      const cnt = parseInt( this.state.inputValue )
      this.setCnt( isNaN( cnt ) ? this.props.min : cnt )
  }

  checkEnterKeycode = ({ keyCode }) => {
    if ( keyCode !== 13 ) return
    this.applyCnt()
  }

  render() {

    const { cnt, inputValue } = this.state

    return (
      <div className="Card d-flex pt-3 mb-3">
        {cnt}
        <button type="button"
                className="btn btn-sm btn-outline-info"
                onClick={ this.dec }
        >
          -
        </button>
        
        <input type="text"
               className="form-control mx-3" 
               value={ inputValue }
               onChange={ e => this.changeInputValue(e.target.value) }
               onBlur={ this.applyCnt }
               onKeyDown={ this.checkEnterKeycode }
        />

        <button type="button"
                className="btn btn-sm btn-outline-info"
                onClick={ this.inc }
        >
          +
        </button>
        {inputValue}
      </div>
    )
  }
}