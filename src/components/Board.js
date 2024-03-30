import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = ()=>{

  const [squares,setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) =>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }

    return null;
  }
  let status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  const winner = calculateWinner(squares);
  if(winner){
    status = `Winner : ${winner}`;
  }else{
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i)=>{
    const newSquares = squares.slice(); //원본 배열을 바꾸지 않기위해서?

    if(newSquares[i] || calculateWinner(newSquares)){
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O' ;
    setSquares(newSquares);
    //setXIsNext(!xIsNext);
    setXIsNext(prev => !prev);
  }

  const renderSqaure = (i) => {
    return <Square value={squares[i]} 
              onClick={()=>{handleClick(i); }}/>
  }


  
  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
          {renderSqaure(0)}
          {renderSqaure(1)}
          {renderSqaure(2)}
      </div>
      <div className='board-row'>
          {renderSqaure(3)}
          {renderSqaure(4)}
          {renderSqaure(5)}
      </div>
      <div className='board-row'>
          {renderSqaure(6)}
          {renderSqaure(7)}
          {renderSqaure(8)}
      </div>
    </div>
  )
  
}

export default Board

// export default class Board extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       squares : Array(9).fill(null),
//     }
//     console.log(this.state);
//   }

//   renderSqaure(i){
//     return <Square value={this.state.squares[i]} 
//               onClick={()=>{this.handleClick(i); }}
//             />
//   }
//   handleClick(i){
//     const squares = this.state.squares.slice(); //원본 배열을 바꾸지 않기위해서?
//     squares[i] = 'X';
//     this.setState({squares : squares});
//   }
//   render() {
//     return (
//       <div>
//         <div className='status'></div>
//         <div className='board-row'>
//             {this.renderSqaure(0)}
//             {this.renderSqaure(1)}
//             {this.renderSqaure(2)}
//         </div>
//         <div className='board-row'>
//             {this.renderSqaure(3)}
//             {this.renderSqaure(4)}
//             {this.renderSqaure(5)}
//         </div>
//         <div className='board-row'>
//             {this.renderSqaure(6)}
//             {this.renderSqaure(7)}
//             {this.renderSqaure(8)}
//         </div>
//       </div>
//     )
//   }
// }
