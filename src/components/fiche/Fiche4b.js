import "./Fiche4b.css";
import { FunctionCSSInterpolation } from "@chakra-ui/react";
import Gj1 from "../../image/Gj1.png";
import Gj2 from "../../image/Gj2.png";
import Gj3 from "../../image/Gj3.png";
import Gh1 from "../../image/Gh1.png";
import { Select } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import Chapitres from "../Chapitre/Chapitres";
import Addchapitre from "../Chapitre/Addchapitre";
import { Container } from "@mui/material";


export default function Fiche4b() {
  return (
    
    <div className="fiche2ba">
      <div className="fiche4bp" />

      <div className="fiche4bpo">
        <NavLink to="/addchapitre">
          <button className="fiche4bpi" style={{ right: "0px" }}>
            <img src={Gj2} className="gj1" alt="gj" />
            <p className="fiche4bpn">اضف مجلد</p>
          </button>
        </NavLink>

        <button className="fiche4bpi " style={{ left: "148px" }}>
          <img src={Gj1} className="gj1" alt="gj" />
          <p className="fiche4bpn">اكتب درس</p>
        </button>
        <button className="fiche4bpi ">
          <img src={Gj3} className="gj1" alt="gj" />
          <p className="fiche4bpn">تحميل درس</p>
        </button>
      </div>
      <div className="novo1">
        <Chapitres />
        {/* <div className="fiche4bpb" style={{ left: "10px" }}>
        <img src={Gh1} className="gh1" alt="gh1" />
        <p className="fiche4bpv"> العلوم الاساسية</p>
      </div>
      <div className="fiche4bpb" style={{ left: "236px" }}>
        <img src={Gh1} className="gh1" alt="gh1" />
        <p className="fiche4bpv"> العلوم الاساسية</p>
      </div>
      <div className="fiche4bpb" style={{ right: "10px" }}>
        <img src={Gh1} className="gh1" alt="gh1" />
        <p className="fiche4bpv"> العلوم الاساسية</p>
      </div> */}
      </div>
    </div>
  );
}
