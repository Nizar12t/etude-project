import "./Fiche2b.css";
import { FunctionCSSInterpolation } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Livres from "../livre/livres";
import Addlivre from "../livre/Addlivre";

export default function Fiche2b() {
  return (
    <div className="fiche2ba">
              <NavLink to= "/addlivre">
        <button className="fiche2bpa" style={{right:"62px"}}>أضف كتاب
</button>
        </NavLink>
        <div className="fiche2bpr">
            
        </div>
        <div className="fiche2bpe">
        {/* <p className="fiche2bpz">الأنواع</p> */}

        {/* <button className="fiche2bpa" style={{right:"144px"}}>رعب</button>
        <button className="fiche2bpa" style={{left:"82px"}}>درامي</button>
        <button className="fiche2bpa" style={{left:"0px"}}>جريمة</button> */}

        </div>
      <div className="fiche2bpm">
        {/* <div className="fiche2bpo" style={{ left: "0px", top: "0px" }}>
          <div className="fiche2bpi"></div>
          <p className="fiche2bpu">Watching you</p>
          <h1 className="fiche2bpy">Dev petton</h1>
          <div className="fiche2bpt"></div>
        </div>
        <div className="fiche2bpo" style={{ top: "0px", right: "0px" }}>
          <div className="fiche2bpi"></div>
          <p className="fiche2bpu">Watching you</p>
          <h1 className="fiche2bpy">Dev petton</h1>
          <div className="fiche2bpt"></div>
        </div>
        <div className="fiche2bpo" style={{ left: "207px", top: "0px" }}>
          <div className="fiche2bpi"></div>
          <p className="fiche2bpu">Watching you</p>
          <h1 className="fiche2bpy">Dev petton</h1>
          <div className="fiche2bpt"></div> 
        </div>*/}
        <div className="new1">
          <div>
            <Livres/>
          </div>
      {/* <Grid   
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
   
             
        <GridItem borderRadius="11px" w="198px" h="312.76" bg="#F1F5F9" >
        <div className="fiche2bpi"></div>
     
        </GridItem>
       

      </Grid> */}


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
    </div>
  );
}
