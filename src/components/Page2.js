// import { Component } from "react";
import { Component } from "react/cjs/react.production.min";
import "./Page2.css";
import Tadrib from "../image/tadrib.png";
import Livre from "../image/koutob.png";
import Pdf from "../image/pdf.png";
import Pc from "../image/pc.png";
import { NavLink } from "react-router-dom";
import Fiche4 from "./Fiche4";

export default class Page2 extends Component{


  render(){

  
  return(
 <div>
 <div className="az">
    <p className="b">خدمات موقع دراسة</p>
 </div>
 <div className="c">
              <div className="c1">
                   <div className="c11">
                   <img src={Tadrib} className="imgg" alt="koutob" /> 
                   <p className="ppppp"> تدريب عبر الأنترنات</p>
                     <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>  <NavLink
                   className= "nn"
                   to={"/fiche1"}>إستكشف
                </NavLink></div>
                   <div className="c12">

                   <img src={Livre} className="imgg" alt="livre" />
                   <p className="ppppp"> كتب على الأنترنات  </p>
                   <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>  <NavLink
                   className= "nn"
                   to={"/fiche2"}>إستكشف
                </NavLink></div>
                   
                   <div className="c13">
                   <img src={Pdf} className="imgg" alt="koutob" />
                   <p className="ppppp"> دروس و إمتحانات  </p>
                   <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>  <NavLink
                   className= "nn"
                   to={"/fiche3"}>إستكشف
                </NavLink></div>

                   <div className="c14">
                   <img src={Pc} className="imgg" alt="pc" />
              
              <p className="ppppp"> تخزين البيانات  </p>
                     <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>
                    <NavLink
                   className= "nn"
                   to={"/fiche4"}>إستكشف
                </NavLink>
                 </div>
                 
</div>
<p className="ij">لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور<br/>
لوريم ايبسوم  يديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس 
</p>
 </div>
 <div className="d">
    <div className="da">
       <p className="daa">موقع دراسة  يوفر لكم</p>
       <p className="daa">أفضل الخدمات يمكنكم التمتع بها بعد تسجيل الدخول او انشاء حساب جديد مع اتباع بعض الخطوات</p>

    </div>
    <div className="db">
    <NavLink to="/inscrit1" >
    <button className="button1"> تسجيل الدخول</button>
            </NavLink>
       
    <NavLink to="/inscrit" >   
       <button className="button2">حساب جديد</button>
       </NavLink>
 </div>
 </div>

</div>


  )
}
}