import "./styles/test.css";
import React, {useState} from "react";
// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//           Learn React By {props.name} Age {props.age}
//       </header>
//     </div>
//   );
// }

// -------------- STATE SU DUNG HOOK

// function App({name}){
//   const [count, setCountNe] = useState(0) //0 nla gia tri ban dau;
//   const [tien, setTien] = useState(1000000)
//   const Tang = (giatri)=>{
//     return setCountNe(count+giatri);
//   }
//   return (
//     <div className="abc">
//         Hello {name}
//         <p>count = {count}</p>
//         <p>tien = {tien}</p>
//         <button onClick={(event)=>{Tang(1)}}>++++</button>
//         <br />
//         <button onClick={(event)=>{setTien(2000000)}}>++tien++</button>
//     </div>
//   );
// }
 // ---- STATE CU, SAI CLASS
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      tien: 10000000
    };
  }
  render(){
    return(
      <div>
        <p>count = {this.state.count}</p>
        <p>tien = {this.state.tien}</p>
        <button onClick={(e)=>{this.setState({count: this.state.count+1})}}>+++count</button>
      </div>
    );
  }
}
// const App = ({name}) =>{
//   return (
//     <div className="arrowfunction">
//       Hi {name}
//     </div>
//   );
// }
// class App extends React.Component{
//     constructor(props){
//       super(props);
//       this.name = props.name;
//     } 
//     render(){
//       return(
//         <div className="arrowfunction">
//           Hi { this.name}
//         </div>
//       );
//     }
// }

// class App extends React.Component{
//   render(){
//     const { name } = this.props;
//     return(
//       <div className="arrowfunction">
//         Hi { name }
//       </div>
//     );
//   }
// }
// class App extends React.Component{
//   render(){
//     return(
//       <div className="arrowfunction">
//         Hi {this.props.name}
//       </div>
//     );
//   }
// }
export default App;
