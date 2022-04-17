import react from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
// import Test from './test';
import "./App.css";
// import Jav from "./Jav";


class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: undefined,
//     };
//   }

  // state={
  //   className:'green'
  // }
  // copier =(e)=> {
  //   console.log(e.target.value);
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };
  //   changepink=()=>{
  //     this.setState({
  //       className:'pink'
  //     })
  //   }
  // changeviolet=(e)=>{
  //   e.preventDefault()
  //   this.setState({
  //     className:'violet'
  //   })
  // }

  //   changerouge=(e)=>{
  //     e.preventDefault()
  //     this.setState({
  //       className:"red"
  //     })
  //   }
  //   changevert=(e)=>{
  //    e.preventDefault()

  //   this.setState({
  //     className:'green'
  // })
  //   }

  // state={
  //   objet:[
  //     {nom:"nizar",prenom:"tormane",age:33},
  //     {nom:"mokhtar",prenom:"zayene",age:22},
  //     {nom:"amir",prenom:"abaid",age:21}
  // ]
  // }
  render() {
    // const date=this.state.objet.map((item)=>{

    //   if (item.age<25)
    //   return (

    //       <ul>
    //          <li>{item.nom}</li>
    //          <li>{item.prenom}</li>
    //          <li>{item.age}</li>

    //       </ul>
    //   )
    // }  )

    return (
      // <div className="App">
        <BrowserRouter>

          <Link to="/">facebook</Link>
           <Link to="/home">instagrame</Link>
        
          <Router path="/" Component={About}/>
          <Router path="/home" Component={Homme}/>
        </BrowserRouter>
        // {/* <Jav /> */}
        /* <div>{date}</div> */
        /* <h1 className={this.state.className} >hello word</h1>
      <button onClick={this.changerouge}>rouge</button>
      <button onClick={this.changevert}>vert</button>
      <button onClick={this.changeviolet}>violet</button>
      <button onClick={this.changepink}>pink</button> */
        /* <input type="text" onChange={this.copier}></input>
        <p>{this.state.name}</p> <br /> */
      // </div>
    )
  }
}
export default App;
