
import { Component } from "react/cjs/react.production.min";
import { NavLink } from "react-router-dom";
import Tadrib from "../image/tadrib.png";
import Livre from "../image/koutob.png";
import Pdf from "../image/pdf.png";
import Pc from "../image/pc.png";
import "./fiche0.css";
// import { Button } from '@chakra-ui/react'
// import { Image } from '@chakra-ui/react'
// import { Stack } from "@chakra-ui/react";

export default class Fiche0 extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        
        
        <div className="nouveau" >
        <h1 className="ppp">موقع دراسة يوفر لكم أفضل الخدمات </h1>
        <p className="colora" > رﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ ود ﺖﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ رﻮﺘﻴﺘﻜﻴﺴﻧﻮﻛ, ﺖﻴﻣأ ﺖﻴﺳ رﺎﻟود مﻮﺴﺒﻳا ﻢﻳرﻮﻟ
ﻲﺗﺎﺘﺑﻮﻴﻟﻮﻓ ﺖﻳأﺮﻳﺪﻨﻴﻬﻳﺮﺒﻳر نإ رﺎﻟود يﺮﻳرأ ﻲﺗﻮﻳأ</p>
             
<div className="colorb" style={{ left: "0px" }}>
                   <img src={Pc} className="colorc" alt="pc" />
              
              <p className="colord"> تدريب عبر الأنترنات</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>

                 <div className="colorb" style={{ right: "0px" }} >
                   <img src={Pc} className="colorc" alt="pc" />
              
              <p className="colord"> تدريب عبر الأنترنات</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>
                 <div className="colorb" style={{ left: "287px" }} >
                   <img src={Pc} className="colorc" alt="pc" />
              
              <p className="colord"> تدريب عبر الأنترنات</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>
                 <div className="colorb" style={{ right: "287px" }} >
                   <img src={Pc} className="colorc" alt="pc" />
              
              <p className="colord"> تدريب عبر الأنترنات</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>
                 
      </div>
      </div>
    );
  }
}
