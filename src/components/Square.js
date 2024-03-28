import { Component } from "react";
import "./Square.css";

const Square = (props)=>{
    return(
        <button className="square"
            onClick={()=>{props.onClick()}}>
        {props.value}
        </button>
    )
}
// const Square = ({onClick,value})=>{
//     return(
//         <button className="square"
//             onClick={onClick}>
//         {value}
//         </button>
//     )
// }
export default Square
// export default class Square extends Component{

//     render(){
//         return(
//             <button className="square"
//                 onClick={()=>{this.props.onClick()}}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }