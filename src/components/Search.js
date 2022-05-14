import { useState } from "react"
import "./Search.css"
export default function Search() {
    const [search, setSearch] = useState('')

    return (
        <div className="tout">
           
                <input  className="searcha"
                    type="text" 
                    placeholder="البحت عن الكتب" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                     <div className="bo ">
                <button className="baa">
                   <i className="bi bi-search"></i>
             </button >
            </div>
            {/* //a contacts array passed down to List  */}
            {/* <List contacts={contacts}/> */}
        </div>
    )
            }