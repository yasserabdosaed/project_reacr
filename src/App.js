import Yas from './js/y1';
import './App.css';
import { Vv } from './context/contt';


function App() {
//   let ss=["yasser","ali","samer","monther","hasn"]
//   let sslist = ss.map((mm)=>{
// return <li>{mm}</li>
//   })

  // document.body.style.backgroundColor="black"
  return (
    <div >
 <Vv.Provider value={[
  {id:1,

    nam:"y1",
    bod:"dhhhhhhhhhhhhh"
  },
    {id:2,

    nam:"y2",
    bod:"dhhhhhhhhhhhhh"
  },
    {id:3,

    nam:"y3",
    bod:"dhhhhhhhhhhhhh"
  },
    {id:4,

    nam:"y4",
    bod:"dhhhhhhhhhhhhh"
  },

 ]}> 
  
  <Yas/>
 
 
 </Vv.Provider>

    
    </div>
  );
}

export default App;
