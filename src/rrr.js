import React, { Component } from "react/cjs/react.production.min";
import "./inscrit.css";
import F from "../image/f.png";
import FF from "../image/ff.png";
import FFF from "../image/fff.png";
import { NavLink } from "react-router-dom";

import { useState, useNavigate } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


class Inscrit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: undefined,
      email: undefined,
      mdp: undefined,
    };
  }
  verifnom = (e) => {
    this.setState({
      nom: e.target.value,
    });
  };

  verifemail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  verifmdp = (e) => {
    this.setState({
      mdp: e.target.value,
    });
  };

  render() {
    
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw"
        }}
        className="insc "
        
      >
         <div className="position">
         <img src={F} className="photo" alt="fh"/>
         <div className="pa ">
          <p className="a" >إنشاء</p>
          <p className="a">حساب جديد</p>
          <p className="a">في دراسة</p>
          
          {/* <img src={Livre} alt="livre" />
          <img src={Examan} alt="examan" /> */}
        <div className="paa">
        <input
          type="texte"
          style={{  marginTop: "20px" }}
          onChange={this.verifnom}
          placeholder=" name"
        />{" "}
        <br />
        <input
          type="texte"
          style={{ marginTop: "20px" }}
          onChange={this.verifemail}
          placeholder="mail@"
          
        />
        <br />
        <input
          type="texte"
          style={{ marginTop: "20px" }}
          onChange={this.verifmdp}
          placeholder="mdp"
        />
        <br />
        <button><NavLink to="/inscrit1" className="btn aa">
        تسجيل الدخول
            </NavLink></button>
 
{/*         
        <button onClick={this.inscrit} style={{ marginTop: "20px" }}>
          inscrit
        </button> */}
        
        <p>{this.state.genre}</p>
        </div>
        </div>
        </div>
        <img src={FF} className=" ii"  alt="ff" />
          <img src={FFF} className="iii"  alt="fff" />
          
      </div>
      
    );
  }
}
export default Inscrit;