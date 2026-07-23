import { useState } from "react";

export default function Yas(params) {

let [cc,nnn] = useState("")
   
function ss(params) {
console.log(params.target.value);
nnn(params.target.value)



    
}
    return(
        <div>

            <h1 >{cc}</h1>
            <input value={cc}  onChange={ss}  />
        </div>
    );
}