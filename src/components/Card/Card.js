import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Card.css'

export default class extends Component {

  static defaultProps = {
    onChangeCnt: function(){}
  }

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
    onChangeCnt: PropTypes.func
  }

  state = { 
    inputValue: this.props.cnt
  }

  inc = () => {
    this.setCnt(this.props.cnt + 1)
  }

  dec = () => {
    this.setCnt(this.props.cnt - 1)
  }

  changeInputValue = inputValue => {
    this.setState({ inputValue })
  }

  setCnt = cnt => {
    const { min, max, onChangeCnt } = this.props

    cnt = Math.min(Math.max(cnt, min), max);
    
    this.setState({ inputValue : cnt })

    onChangeCnt( cnt )
  }

  applyInputValue = () => {
      const cnt = parseInt( this.state.inputValue )
      this.setCnt( isNaN( cnt ) ? this.props.cnt : cnt )
  }

  checkEnterKeycode = ({ keyCode }) => {
    if ( keyCode !== 13 ) return
    this.applyInputValue()
  }

  render() {

    const { inputValue } = this.state

    return (
      <div className="Card d-flex pt-3 mb-3">
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
               onBlur={ this.applyInputValue }
               onKeyDown={ this.checkEnterKeycode }
        />

        <button type="button"
                className="btn btn-sm btn-outline-info"
                onClick={ this.inc }
        >
          +
        </button>
      </div>
    )
  }
}