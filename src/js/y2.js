import { useContext } from "react";

import { Vv } from "../context/contt";



export default function Oo(){

    let kkk= useContext(Vv)
    return(
        <>
        <label>{kkk.a}</label>
<input value={kkk.b} onChange={(e)=>{
kkk.c(e.target.value)
}}/>
        
        </>
    );
}