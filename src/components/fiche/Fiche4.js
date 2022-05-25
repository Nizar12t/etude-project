import "./Fiche4.css"
import Search from "./Search"
import Fiche4a from "./Fiche4a"
import Fiche4b from "./Fiche4b"

export default function Fiche4(){


  return(
    <div className="fIche4css">
    <div className="fichea">
      <Search/>
      </div>
      <div style={{  width: "100%" ,
    height:"2370px"}} >
      <Fiche4a/>
      </div>
      <Fiche4b/>
      
      </div>
      
  )
}