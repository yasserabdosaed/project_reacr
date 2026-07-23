import { useState } from "react";

export default function FOyas(){

    let [allgt,allst]= useState({im:"",pas:""})

    return(
        <form onSubmit={(f)=>{
f.preventDefault()
        }}>

<input value={allgt.im} onChange={(emm)=>{
allst({...allgt,im:emm.target.value})
}}/>
<br/>
<input value={allgt.pas} onChange={(paa)=>{
allst({...allgt,pas:paa.target.value})
}}/>
<br/>

<button>OK</button>

<div style={{
    border:"2px solid red"
}}>

<p>{allgt.im}</p>
<p>{allgt.pas}</p>

</div>

        </form>
    );

    

   


}