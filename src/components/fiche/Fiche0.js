
import { Component } from "react/cjs/react.production.min";
import { NavLink } from "react-router-dom";
import Tadrib from "../../image/tadrib.png";
// import Livre from "../image/koutob.png";
import Pdf from "../../image/pdf.png";
import Livre from "../../image/livre.png";
import Examen from "../../image/examen.png";
import Stockage from "../../image/stockage.png";
import Formation from "../../image/formation.png";
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
        <p className="colora" >   
        موقع دراسة هو منصة تعليمية موجهة للطلاب و التلاميذ تحت اشراف  مجموعة من المعليمن من ذوي الخبرة من خلال  المجلدات و الفيديوهات
</p>
             
<div className="colorb" style={{ left: "0px" }}>
                   <img src={Stockage} className="colorc" alt="pc" />
              
              <p className="colord">  تخزين البيانات
 </p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche4"}>إستكشف
                </NavLink>
                 </div>

                 <div className="colorb" style={{ right: "0px" }} >
                   <img src={Examen} className="colorc" alt="pc" />
              
              <p className="colord"> دروس و امتحانات
</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>
                 <div className="colorb" style={{ left: "287px" }} >
                   <img src={Formation} className="colorc" alt="pc" />
              
              <p className="colord"> تدريب عبر الأنترنات</p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                 </div>
                 <div className="colorb" style={{ right: "287px" }} >
                   <img src={Livre} className="colorc" alt="pc" />
              
              <p className="colord">  كتب على الانترنات
 </p>
                     <p className="colore">موقع دراسة يوفر لكم  كتب رقمية بجودة عالية 
                    </p>
                    <NavLink
                   className= "colorf"
                   to={"/fiche2"}>إستكشف
                </NavLink>
                 </div>
                 
      </div>
      </div>
    );
  }
}
