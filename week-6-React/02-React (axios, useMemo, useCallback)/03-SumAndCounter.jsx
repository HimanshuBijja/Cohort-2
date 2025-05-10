import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);
  let n = (number*(number+1))/2;
  return <div>
    <input onChange={(e)=> setNumber( Number(e.target.value))} placeholder="Enter Number"></input> <br />
   sum is {number ? n : "Enter Number"}<br />
   <button onClick={()=> setCount(count+1)}>Counter {"("+count+")"}</button><br />
  </div>
}

export default App;
