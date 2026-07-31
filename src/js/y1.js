import { Route,Routes,Link } from "react-router-dom";
import { Ya2 } from "./y2";
import { useContext } from "react";
import { Vv } from "../context/contt";

export default function Yas(params) {

  const dat= useContext(Vv)
  return(

    <>

    <div>
{dat && dat.map((e)=>{
  return(<Link key={e.id} to={`/yasser/${e.id}`}>
  <button>
    {e.nam}
  </button>
  </Link>);
  
})}


    </div>

    <Routes>
     <Route path="/yasser/:x" element={<Ya2/>}/>
    </Routes>
    </>
  );
}