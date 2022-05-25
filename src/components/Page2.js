// import { Component } from "react";
import { Component } from "react/cjs/react.production.min";
import "./Page2.css";
import Tadrib from "../image/tadrib.png";
import Livre from "../image/koutob.png";
import Pdf from "../image/pdf.png";
import Pc from "../image/pc.png";
import { NavLink } from "react-router-dom";
import Fiche4 from "./fiche/Fiche4";
import ResponsiveDialog from "./ResponsiveDialog";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Page2() {


   const [user] = useAuthState(auth);
  

  
  return(
   //   <div className="ma1">
 <div className="ia">
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
                    </p> 
                    {user && (  
                     <NavLink
                   className= "nn"
                   to={"/fiche1"}>إستكشف
                </NavLink>
                )}
                    {!user && (  
                          <div style={{    position: "absolute",
                          left: "224px" ,
                          bottom: "64.81px"}}>
                
                <ResponsiveDialog/>
                </div>

                )}

                </div>
                   <div className="c12">

                   <img src={Livre} className="imgg" alt="livre" />
                   <p className="ppppp"> كتب على الأنترنات  </p>
                   <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>                 {user && (  
                     <NavLink
                   className= "nn"
                   to={"/fiche2"}>إستكشف
                </NavLink>
                )}
                    {!user && (  
                          <div style={{    position: "absolute",
                          left: "224px" ,
                          bottom: "64.81px"}}>
                
                <ResponsiveDialog/>
                </div>

                )}</div>
                   
                   <div className="c13">
                   <img src={Pdf} className="imgg" alt="koutob" />
                   <p className="ppppp"> دروس و إمتحانات  </p>
                   <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>                  {user && (  
                     <NavLink
                   className= "nn"
                   to={"/fiche3"}>إستكشف
                </NavLink>
                )}
                    {!user && (  
                       <div style={{    position: "absolute",
                        left: "224px" ,
                        bottom: "64.81px"}}>
                
                <ResponsiveDialog/>
                </div>
                )}</div>

                   <div className="c14">
                   <img src={Pc} className="imgg" alt="pc" />
              
              <p className="ppppp"> تخزين البيانات  </p>
                     <p className="pppp">ﺪﻳﺮﺘﺳﻮﻧ سﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ<br/>
                      ﺎﻨﺟﺎﻣ رﺎﻟود تا يرﻮﺑﺎﻟ تﻮﻴﺘﻧﻮﻳ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأﺪﻳﺪﻳﺎﻜﻧأ<br/> 
                      ﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ وﺪﺘﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ 
                    </p>
                    {user && (  
                     <NavLink
                   className= "nn"
                   to={"/fiche4"}>إستكشف
                </NavLink>
                )}
                    {!user && (  
                          <div style={{    position: "absolute",
                          left: "224px" ,
                          bottom: "64.81px"}}>
                
                <ResponsiveDialog/>
                </div>

                )}
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
 {/* </div> */}
 </div>

</div>
</div>


  )
}
