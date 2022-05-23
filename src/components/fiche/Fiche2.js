import "./Fiche2.css"
import Search from "./Search"
import Fiche2a from "./Fiche2a"
import Fiche2b from "./Fiche2b"

export default function Fiche2(){


  return(
    <div>
    <div className="fichea">
      <Search/>
      </div>
      <div style={{  width: "100%" ,
    height:"2370px"}} >
      <Fiche2a/>
      </div>
      <Fiche2b/>
      
      </div>
      
  )
}
