import { React } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar2.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { Center, Select } from "@chakra-ui/react";

import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
export default function Navbar2() {
  let location = useLocation();
  return location.pathname !== "/etape1" ? (
    <div className="navbarr">
      <div className="groupe">
        <div className="groupe1">
          <NavLink className={"p10"} to={"/page2"}>
            الخدمات
          </NavLink>
          <div className="p11">
            <p style={{ textAlign: "right" }}>الخدمات</p>
            <p style={{ textAlign: "right" }}>ﺖﻴﻟﻮﻤﺘﻧ</p>
            <p style={{ textAlign: "right" }}>ﻮﻳﺮﻴﺴﻳد </p>
          </div>
        </div>
        <div className="groupe2">
          <NavLink className={"p10"} to={"/Question"}>
            الاسئلة الشاسعة
          </NavLink>
          <div className="p11">
            <p style={{ textAlign: "right" }}>الاسئلةالشاسعة </p>
            <p style={{ textAlign: "right" }}> ﺎﻴﺴﻴﻓوأ ﻮﻴﻛ ﺖﺴﻳا </p>
            <p style={{ textAlign: "right" }}> يﺪﻳأ ﻢﻴﻧا </p>
            <p style={{ textAlign: "right" }}> ﺎﻴﺴﻴﻓوأ ﺖﺴﻳا </p>
          </div>
        </div>
        <div className="groupe3">
          <NavLink className={"p10"} to={"/page2"} to="/kousousiyat">
            الخصوصيات و الامن
          </NavLink>
          <div className="p11">
            <p style={{ textAlign: "right" }}>الخصوصيات و الامن</p>
            <p style={{ textAlign: "right" }}> ﺎﻴﺴﻴﻓوأ ﻮﻴﻛ ﺖﺴﻳا </p>
            <p style={{ textAlign: "right" }}> يﺪﻳأ ﻢﻴﻧا </p>
            <p style={{ textAlign: "right" }}> ﺎﻴﺴﻴﻓوأ ﺖﺴﻳا </p>
          </div>
        </div>
        <div className="groupe4">
          <NavLink className={"p10"} to={"/page2"}>
            {" "}
            شروط الاستخدام
          </NavLink>
          <div className="p11">
            <p style={{ textAlign: "right" }}> أليايت,سيت دو أيوسمود تيمب</p>
            <p style={{ textAlign: "right" }}>
              {" "}
              وت انيم أد مينيم فينايم,كيواس{" "}
            </p>
            <div>
              <BsFacebook />
              <BsInstagram />
              <BiBasketball />
              <FiTwitter />
            </div>
          </div>
        </div>
        <div className="p12">
          <div className="sel">
            
          </div>

          {/* </div> */}
          {/* <ChevronDownIcon w={8} h={8} color="red.500" /> */}
        </div>
      </div>
    </div>
  ) : null;
}
