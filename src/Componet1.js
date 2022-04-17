import { Component, React } from "react/cjs/react.production.min";
import "./App.css";
import Inscrit from "./components/Inscrit";
import { BrowserRouter, Routes, Route ,NavLink} from "react-router-dom";



export default class Componet1 extends Component{
render(){

    return(


     
      <div 
      className="img1 ">
        

          <div className="aa">
              <h1 >bienvenue sur  etude</h1>
              <p>étude vous offre les meilleurs services</p>
       
        <BrowserRouter>
           <NavLink  to="/inscrit" className="btn aa" >nouveau compte</NavLink>
            <Routes>
           <Route exact path="/inscrit"   element={<Inscrit/>}/>
           </Routes>
           </BrowserRouter>
  
  
           </div>
   

      
    </div>

       
    
    )
}


}