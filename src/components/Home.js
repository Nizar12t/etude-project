import { React, Component } from "react/cjs/react.production.min";
import { NavLink } from "react-router-dom";
import Fiche0 from "./Fiche0";
// import "../App.css";
import Img2 from "../image/img2.png" 
import Inscrit from "./Inscrit";
import "./inscrit.css";
import Avis from "./Avis";
import "./Home.css"
class Home extends Component {
  render() {
    return (
      <div>

        <div class="img1 " style={{ height: "100vh", width: "100%" }}>
        <img src={Img2} className="img2 " alt="img2" />
          <div  className="aa">
            <p  >   مرحبا بك في</p>
            <p style={{fontWeight:"bold"}}>      دراسة</p>
            <p style={{fontSize: "40px"}} >موقع دراسة يوفر لكم أفضل الخدمات</p>
            <p style={{fontSize: "40px"}} >يمكنكم انشاء حساب جديد بالضغط على
</p>

            {/* <NavLink to="/inscrit" className="btn aa">
              nouveau compte
            </NavLink> */}
            <NavLink to="/inscrit"
            className={"button3"} >   
       <button >حساب جديد</button>
       </NavLink>
       
          </div>
        </div>
        <Fiche0/>
        <Avis/>
      </div>
    );
  }
}
export default Home;
