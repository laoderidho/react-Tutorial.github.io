import React from "react";
import { useState } from "react";
import ConditionalRenderingCadangan from "./ConditionalRenderingCadangan";

const ConditionalRendering=()=>{

    const [isToogle, setisToogle] = useState(false)

    return(
        <div>
           <button onClick={()=> setisToogle(!isToogle)}>Klik ConditionalRendering</button>
           {isToogle && <ConditionalRenderingCadangan></ConditionalRenderingCadangan>}
        </div>
    )
}

export default ConditionalRendering;