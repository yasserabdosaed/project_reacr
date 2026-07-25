import { useState } from "react";

export default function Yas(){

  let [allgt,allst] = useState("")
  let [ss,ssall] = useState(["yasser","ali","samer","monther","hasn"])


  let sslist = ss.map((mm)=>{
    return <div  style={{
        margin : "auto",
        width:"4"
      }}>
      <ul> <li style={{
          color:"black"
        }}>{mm}</li></ul>
       
      </div>


    

  })




  return (
    <div style={{
      width:"100%",
      textAlign:"center"
   
    }}>
      <div> {sslist}

      <input value={allgt} onChange={(vv)=>{
       allst(vv.target.value) 

       console.log(allgt)
      }}/>
      <button onClick={()=>{
        let pp = [...ss]
        pp.push(allgt)
        ssall(pp)


  


      }}>add</button></div>


     
    </div>

  );
}