import "../sytle/y.css"

import { useState } from "react";


// let b = document.querySelector(".fot")[0]
export default function Yas(){
  let [allgt,allst]=useState({
    in1:"",
    in2:"",
    in3:"",
    in4:"",
    ch:false,
    ss:""
  })



  let [n,m] = useState({
    dv:false,
    p : "تم سحب المبلغ"

  })


  const isFormValid =
  allgt.in1 !== "" &&
  allgt.in2 !== "" &&
  allgt.in3 !== "" &&
  allgt.in4 !== "" &&
  allgt.ch ===true &&
  allgt.ss  !== ""


  // console.log(b)
  return (

    <>
    <div className="contener">

<div className="y">

<h1 style={{
  textAlign:"center",
  paddingTop:"40px"
}}>اهل بكم </h1>
<hr/>

<label>الاسم</label>
<br/>

<input  onChange={(i)=>{
  allst({...allgt,in1:i.target.value})
}} value={allgt.in1}/>
<br/>
<label>رقم الهاتف</label>
<br/>

<input style={{
  border:allgt.in2.length === 0 ? "3px" : allgt.in2.length === 9 ? "3px solid green":"3px solid red"
}} maxLength={9} type="text" onChange={(c)=>{

  const kk = c.target.value

  if(/^\d*$/.test(kk)){
allst({...allgt,in2:c.target.value})
  }


}} value={allgt.in2}/>
<br/>
<label>العمر</label>
<br/>
<input maxLength={3} onChange={(c)=>{
allst({...allgt,in3:c.target.value})
}} value={allgt.in3}/>


<label>المبلغ الذي تريد سحبه</label>
<input maxLength={9} onChange={(c)=>{
  allst({...allgt,in4:c.target.value})
}} value={allgt.in4}/>
<br/>
<br/>

<label>الموافقه على السحب</label>
<input onChange={(e) => {
          allst({...allgt,ch:e.target.checked});
        }}  type="checkbox"/>

<select value={allgt.ss} onChange={(q)=>{
allst({...allgt,ss:q.target.value})

}}>
  <option>قم باختيار الجنس</option>

  <option>ذكر</option>
  <option>انثى</option>
</select>
<br/>
<button  disabled={!isFormValid} onClick={rr}>سحب</button>


</div>

{n.dv && <div onClick={()=>{m({...n,dv:false})}} className="fot">

  <h1 style={{
    textAlign:"center",
    width:"100%"
  }}>
    {n.p}
    
  </h1>
</div>
}
    </div>
    </>
  );
  function rr(){
    if(allgt.in1 !=="" && allgt.in2 !== "" && allgt.in3 !=="" && allgt.in4 !== ""){
    m({...n,dv:true})
    }
    

if (allgt.in1 ==="" && allgt.in2 === "" && allgt.in3 ==="" && allgt.in4 === "") {
  
   m({...n,dv:true,p:"قم بادخال البيانات"});
}

  else  if(allgt.in1 === ""){
    m({...n,dv:true,p:"قم بادخال الاسم"});
}
else if(allgt.in2 === ""){
    m({...n,dv:true,p:"قم بادخال رقم الهاتف"});
}
else if(allgt.in3 === ""){
    m({...n,dv:true,p:"قم بادخال العمر"});
}
else if(allgt.in4 === ""){
    m({...n,dv:true,p:"قم بادخال المبلغ"});
}
else{
    m({...n,dv:true,p:"تم سحب المبلغ"});
}
console.log(isFormValid)
  }

}