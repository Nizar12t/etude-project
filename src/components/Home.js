import { React, Component } from "react/cjs/react.production.min";
import { NavLink } from "react-router-dom";
import Fiche0 from "./fiche/Fiche0";
// import "../App.css";
import Img2 from "../image/img2.png";
import Inscrit from "./Inscrit/Inscrit";
import  "./Inscrit/inscrit.css";
import Avis from "./Avis";
import "./Home.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Home() {
  const[user]= useAuthState(auth)
  return (
    <div>
      <div class="img1 " style={{ height: "100vh", width: "100%" }}>
        <img src={Img2} className="img2 " alt="img2" />
        <div className="aa">
          <h2> مرحبا بك في  <br/>دراسة</h2>
          <h3 >موقع دراسة يوفر لكم أفضل الخدمات</h3>
          <h4 >يمكنكم انشاء حساب جديد بالضغط على</h4>

          {/* <NavLink to="/inscrit" className="btn aa">
              nouveau compte
            </NavLink> */}
          {!user && (
            <NavLink to="/inscrit" className={"home-btn"}>
              <button>حساب جديد</button>
            </NavLink>
          )}
        </div>
      </div>
      <Fiche0 />
      {/* <Avis /> */}
    </div>
  );
}
