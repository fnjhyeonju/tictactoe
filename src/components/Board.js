import React, { Component } from 'react'
import Square from './Square'
import "./Board.css";

export default class Board extends Component {
    renderSqaure(i){
        return <Square />
    }
  render() {
    return (
      <div>
        <div className='status'></div>
        <div className='board-row'>
            {this.renderSqaure(0)}
            {this.renderSqaure(1)}
            {this.renderSqaure(2)}
        </div>
        <div className='board-row'>
            {this.renderSqaure(3)}
            {this.renderSqaure(4)}
            {this.renderSqaure(5)}
        </div>
        <div className='board-row'>
            {this.renderSqaure(6)}
            {this.renderSqaure(7)}
            {this.renderSqaure(8)}
        </div>
      </div>
    )
  }
}
