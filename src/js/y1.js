import { useState } from "react";

let nem="yasser";



export default  function Y1(){
    
    let ss = useState(nem)
    let vl = ss['0']
    let st=ss["1"]
  console.log(vl)

     function nn(){
        if(vl === "yasser"){
 st("ali")
        }else{
            st("yasser")
        }
 console.log(vl)
    
      console.log(vl)
    }




    return(
<div>
    <p>heloo {vl}</p>
    <button onClick={nn}>ok</button>
</div>
    );

   
}