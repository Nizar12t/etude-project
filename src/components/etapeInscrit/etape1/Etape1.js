import React from "react";
import "./Etape1.css";
import { NavLink } from "react-router-dom";
import Gr from "../../../image/Group1.png";
import { useState } from "react";
import Po from "../../../image/po.png";
import Logo from "../../../image/Grr.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

export default function Etape1() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user && (
        <div className="etape11">
          <div className="etape12">
            <div className="etape121">
              <h1 className="etape122">اختر تصنيفك</h1>
              <NavLink to="/etape2" className={"button12"}>
                <button>تلميذ </button>
              </NavLink>
              <NavLink to="/etape2" className={"button13"}>
                <button>استاذ </button>
              </NavLink>
            </div>
          </div>
          <div className="etape13">
            <img src={Logo} className="colorcp" alt="logo" />
            <div className="etape288">
              <img
                src={Po}
                className="po5"
                style={{ backgroundColor: "#12A8DA" }}
                alt="po"
              />
              <img
                src={Po}
                className="po5"
                style={{ bottom: "82px", backgroundColor: "#12A8DA" }}
                alt="po"
              />
              <img
                src={Po}
                className="po5"
                style={{ bottom: "0px" }}
                alt="po"
              />
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
      )}
    </>
  );
}
