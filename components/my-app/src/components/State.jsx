import React from "react";
import { useState } from "react";
import StateCadangan from "./StateCadangan";

const State = ()=>{
  const [getNavbarValue, setNavbarValue] = useState(""); // get sebagai pemanggil isi value nya dan set sebagai Pengatur / pengisi value nya 
  const change = ()=>{
    setNavbarValue("My Set")//setNavbarValue berisi My Set
  }
    return (
        <div>
           <StateCadangan navValue={getNavbarValue}></StateCadangan> {/* navValue sebagai Deklarasi paramater dan getNavbarValue berisi konten yang ada di dalam setNavbarValue */}
            <button  onClick={()=>change()}>Gantingan mySet nya </button>
         </div>
    )

}

export default State;