import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);

  let num = useMemo(() => {
    console.log("memo called");
    let num = 0;
    for (let i = 1; i <= number; i++) {
      num += i;
    }
    return num;
  },[number]);


  // let n = (number*(number+1))/2;
  return (
    <div>
      <input
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Number"
      ></input>
      <br />
      sum is {number ? num : "Enter Number"}
      <br />
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
      <br />
    </div>
  );
}

export default App;
