import { useState } from "react";
let nn = 5;
export default function Yas(){

  let [allgt,allst] = useState("")
  let [ss,ssall] = useState([
    {id:1,nam:"yasser"},
    {id:2,nam:"ali"},
    {id:3,nam:"samer"},
    {id:4,nam:"monther"},
    {id:5,nam:"hasn"},
    ])


  let sslist = ss.map((mm)=>{
    return <div key={mm.id} style={{
        margin : "auto",
        width:"4"
      }}>
      <ul> <li key={ss.id} style={{
          color:"black"
        }}>{mm.nam}    <button onClick={()=>{
          aaaaa(mm.id)
             
        }}>del</button></li></ul>
       
      </div>


    

  })

function aaaaa(i){

  
ssall(ss.filter((item) => item.id !== i));

}


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
        // let pp = [...ss]
        // pp.push(allgt)
        nn++
        ssall([...ss,{nam:allgt,id:nn}])
        console.log(nn)


  


      }}>add</button></div>


     
    </div>

  );
}