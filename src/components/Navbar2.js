import {   Paper } from "@material-ui/core";
import { Box } from "@mui/system";


import { React } from "react";
import { NavLink, useLocation } from "react-router-dom";
import   "./Navbar2.css";

// import { BsFacebook } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { BiBasketball } from "react-icons/bi";
// import { FiTwitter } from "react-icons/fi";
// import { Center, Select } from "@chakra-ui/react";

/*  */


export default function Navbar2() {
  let location = useLocation();
  return location.pathname !== "/page3" ? (
    <div className="navbarr">
     
      <div className="paperccs">
        <div className="papercss" style={{right:"0px"}}>
        
        <NavLink  to={"/page2"}>
        <button className={"p10"}>
          الخدمات
        
        </button>
        </NavLink>
        </div>
        <div className="papercss" style={{left:"10px"}}>
        
          <NavLink  to={"/Question"}>
          <button className={"p10"}>
            الاسئلة 
          
          </button>
          </NavLink>
          </div>
        
        <div className="papercss" style={{right:"285px" }}>
        <NavLink   to={"/kousousiyat"}>

          <button className={"p10"} >
            الخصوصيات 
        </button>
        </NavLink>

          </div>
          </div>

          
       
      
     
    </div>
  ) : null;
}
