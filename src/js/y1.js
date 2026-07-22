import { useState } from "react";

let nem="yasser";



export default  function Y1(){
    let ss = useState(nem)
    let vl = ss['0']
    let st=ss["1"]
  console.log(vl)

     function nn(){
 console.log(vl)
     st("ali")
      console.log(vl)
    }




    return(
<div>
    <p>heloo {vl}</p>
    <button onClick={nn}>ok</button>
</div>
    );

   
}