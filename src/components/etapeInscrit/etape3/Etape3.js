import React from "react";
import "./Etape3.css";
import { NavLink } from "react-router-dom";
import Gr from "../../../image/Group1.png";
import { useState } from "react";
import Po from "../../../image/po.png";
import Logo from "../../../image/Grr.png";
import { BsCheckCircle } from "react-icons/bs";

export default function Etape3() {
  return (
    <div className="etape11">
      <div className="etape12">
        <div className="et3">
          <BsCheckCircle className="nt" />

          <h1 className="nt1">رائع</h1>
          <p className="nt2">أنت الان جاهز لاستخدام دراسة</p>

          <NavLink to="/">
            <button className={"nt3"}>ابدأ </button>
          </NavLink>
        </div>
      </div>
      <div className="etape13">
        <img src={Logo} className="colorcp" alt="logo" />
        <div className="etape288">
          <img src={Po} className="po5" alt="po" />
          <img src={Po} className="po5" style={{ bottom: "82px" }} alt="po" />
          <img src={Po} className="po5" style={{ bottom: "0px" }} alt="po" />
          <p className="p8" style={{ top: " 10px" }}>
            انشاء حساب جديد
          </p>
          <p className="p8" style={{ bottom: " 100px", left: "100px" }}>
            التصنيف
          </p>
          <p className="p8" style={{ bottom: " 10px", left: "100px" }}>
            التسجيل
          </p>
        </div>
      </div>
    </div>
  );
}
