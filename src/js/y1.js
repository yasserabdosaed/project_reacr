import { useState } from "react";
let o=0;
export default function Yas(){
let [allgt,allst]=useState({
  an:0,
  en:0
})

function cc(){
  allst(
  {...allgt,an:allgt.an+1}
  )
  o++

  setTimeout(()=>{
allst((m)=>{

return {...m,en:o}
})

allst((e)=>{
  
  return {...e,an:o}
})
  },5000)
}

  return (
   <>
   <label>antthar : {allgt.an}</label>
   <br/>
   <label>end : {allgt.en}</label>

   <br/>

   <button onClick={cc}>add</button>
   </>

  );
}