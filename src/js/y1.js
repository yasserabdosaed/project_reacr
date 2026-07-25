import { useState } from "react";

export default function Ha(params) {
  
  let [allgt, allst] = useState({
    x:0,
    name:"",
    emile:"",
    chk:false
  });

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
            padding:"10px",
          width: "400px",
          height: "200px",
          backgroundColor: "white",
          margin: "20px auto",
        }}
      >
        <h3
          style={{
            display: "inline-block",
            marginRight: "10px",
          }}
        >
          scro:{allgt.x}{" "}
        </h3>
        <button onClick={(ee) => {
          
          
            allst({...allgt,x:allgt.x + 1});
            
        }}>+1</button>

        <form onSubmit={(n)=>{
n.preventDefault()
console.log(allgt)
        }}>
     
     username : <input value={allgt.name} onChange={(nn)=>{
allst({...allgt,name:nn.target.value})
     }}/>
     <br/>
     gimail : <input value={allgt.emile} onChange={(ii)=>{
allst({...allgt,emile:ii.target.value})
     }}/>
     <input onChange={(c)=>{
console.log(c.target.checked)
allst({...allgt,chk:c.target.checked

})


     }} type="checkbox" />

     <button>OK</button>



        </form>
      </div>
    </div>
  );
}
