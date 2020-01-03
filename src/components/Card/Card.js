import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Card.css'

export default class extends Component {

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }

  state = {
    inputValue: this.props.min
  }

  inc = () => {
    this.setCnt(+this.state.inputValue + 1)
    // this.setState( ( state, { cnt }) => {

    //   return {
    //     innerCnt: +cnt + 1
    //   }
    // })
  }

  dec = () => {
    this.setCnt(+this.state.inputValue - 1)
    // this.setState( ( state, { cnt }) => {

    //   return {
    //     innerCnt: cnt - 1
    //   }
    // })
  }

  changeInputValue(inputValue) {
    this.setState( () => {
      return {
        inputValue
      }
    })
  }

  setCnt = (value) => {
    const { cnt, onChangeCnt, min, max } = this.props

    if (isNaN(value)) return this.setState( { inputValue : cnt } )

    value = parseInt( value )

    value = Math.min(Math.max(value, min), max);

    onChangeCnt( value )
    this.setState( { inputValue : value } )
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
               onBlur={ e => this.setCnt(e.target.value) }
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