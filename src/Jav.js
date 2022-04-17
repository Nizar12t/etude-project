import react from "react";
import { Component } from "react/cjs/react.development";

class Jav extends Component {
    constructor(props){
    super(props)
    this.state={
       genre:undefined
       


    }
    
}
verif=(e)=>{
 this.setState({
     genre:e.target.value
     
 
})}






render(){
   

    return (
    <div>

        home:<input type="radio" name="b" onChange={this.verif} value="bonjour ms"/>
        famme:<input type="radio" name="b" onChange={this.verif} value="bonjour madame"/>
        
         <p>{this.state.genre}</p>
    </div>
    )}
    

}
export default Jav;