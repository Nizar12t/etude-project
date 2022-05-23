import React from "react";
import "./Etape2.css";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "../../../image/Grr.png";
import Po from "../../../image/po.png";

import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  CollectionReference,
} from "firebase/firestore/lite";

export default function Etape2(props) {
  
  const [profile, setProfile] = useState({
    nom: "",
    prenom: "",
    ville: "",
    telephone: "",
    dateN: "",
    genre: "",
  });
  function handleChange(e) {
    profile[e.target.id] = e.target.value;
    setProfile({ ...profile, profile });
  }
  const saveChange = async () => {
    await addDoc(collection(props.db, "user-response-save"), {
      nom: profile.nom,
      prenom: profile.prenom,
      ville: profile.ville,
      telephone: profile.telephone,
      dateN: profile.dateN,
      genre: profile.genre,
    })
      .then(function (res) {
        alert("data is succesfully added");
      })
      .catch(function (err) {
        alert("data cant be added ");
      });
  };

  return (
    <div className="etape21">
      <div className="etape22">
        <div className="etape211">
          <div className="l111">
            <Input
              placeholder="اللقب"
              className="ttt"
              id="prenom"
              onChange={handleChange}
            />
            <Input
              placeholder="الهاتف"
              className="ttt1"
              id="telephone"
              onChange={handleChange}
            />
            <Input
              placeholder="الجنس"
              className="ttt2"
              id="genre"
              onChange={handleChange}
            />
          </div>
          <div className="l222">
            <Input
              placeholder="الاسم"
              className="ttt"
              id="nom"
              onChange={handleChange}
            />
            <Input
              placeholder="البلد"
              className="ttt1"
              id="ville"
              onChange={handleChange}
            />
            <Input
            type="date"
              placeholder="تاريخ الولادة"
              className="ttt2"
              id="dateN"
              onChange={handleChange}
            />
          </div>
        </div>
        <NavLink
          to="/etape3"
          style={{ bottom: "196px" }}
          className={"button44"}
        >
          <button onClick={saveChange}>تسجيل </button>
        </NavLink>
        <NavLink to="/etape3" style={{ top: "273px" }} className={"button44"}>
          <button>اضف صورة</button>
        </NavLink>
        <div className="im11">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </div>
      </div>
      <div className="etape23">
        {/* <div className="cm">
            </div> */}
        <img src={Logo} className="colorcm" alt="logo" />
        <div className="etape27">
          <img
            src={Po}
            style={{ backgroundColor: "#12A8DA" }}
            className="po1"
            alt="po"
          />
          <img
            src={Po}
            className="po1"
            style={{ bottom: "82px", backgroundColor: "#12A8DA" }}
            alt="po"
          />
          <img src={Po} className="po1" style={{ bottom: "0px" }} alt="po" />
          <p className="p7" style={{ top: " 10px" }}>
            انشاء حساب جديد
          </p>
          <p className="p7" style={{ bottom: " 100px", left: "100px" }}>
            التصنيف
          </p>
          <p className="p7" style={{ bottom: " 10px", left: "100px" }}>
            التسجيل
          </p>
        </div>
      </div>
    </div>
  );
}
