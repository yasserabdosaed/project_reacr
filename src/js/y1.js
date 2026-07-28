import "../sytle/y.css"
import Oo from "../js/y2"

import { useState } from "react";
import {Vv} from "../context/contt"


// let b = document.querySelector(".fot")[0]
export default function Yas(){
  let [allgt,allst] = useState({
    in1:"",
    in2:"",
    in3:""
  })
function yy(params) {
  allst({...allgt,in1:params})
}
function yy1(params) {
  allst({...allgt,in2:params})
}
function yy2(params) {
  allst({...allgt,in3:params})
}

return(
<>

<Vv.Provider value={{
  a:"nfsnfndmfndsfndmns",
  b:allgt.in1,
  c:yy
}}>
<Oo/>
</Vv.Provider>



<Vv.Provider value={{
  a:"hhhhhhhhhhh",
  b:allgt.in2,
  c:yy1
}}>
  <Oo/>
</Vv.Provider>
<Vv.Provider value={{
  a:"nnnnnnnnnn",
  b:allgt.in3,
  c:yy2

}}>
 <Oo/>

</Vv.Provider>


</>

);
}