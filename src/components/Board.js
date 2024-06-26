import Square from './Square'
import "./Board.css";

const Board = ({squares,onClick})=>{

  const renderSqaure = (i) => {
    return <Square value={squares[i]} 
              onClick={()=>{onClick(i); }}/>
  }


  
  return (
    <div className='board-wrapper'>

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
