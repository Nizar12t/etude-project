import React, { useState} from "react";
import "./inscrit.css";
import F from "../image/f.png"
import FF from "../image/ff.png";
import FFF from "../image/fff.png";

export default function Inscrit1 (){
  
const[email,setEmail]=useState('');
const[mdp,setMdp]=useState('');
  
 

   function verifemail(e){
      setEmail(e.target.value);
  };
  function verifmdp(e){
      setMdp(e.target.value);
      
  };


    return (
     
      
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
         className="insc "> 
         <div className="position">
           <img src={F} className="photo" alt="fh"/>
          <div className="pa ">
           <p className="av" > تسجيل الدخول  في دراسة</p>
        
     
          <br />
         <input
           value={email}
           style={{ marginTop: "20px" }}
           onChange={verifemail}
           placeholder="mail@"
          
         />
         <br />
        <input
          value={mdp}
           style={{ marginTop: "20px" }}
           onChange={verifmdp}
           placeholder="mdp"
         />
         <br />
         
      
        </div>
        <button className="buttonins">  الدخول</button>
        </div>
       
         <img src={FF} className=" ii"  alt="ff" />
          <img src={FFF} className="iii"  alt="fff" /> 
      </div>
      
    );
  }
