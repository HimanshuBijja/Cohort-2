import { memo, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const DemoButton = memo(({ demFun }) => {
  console.log("control 1");

  return <button onClick={demFun}>button 2</button>;
});

function App() {
  const check = useCallback(() => {
    console.log("control 2");
  }, []);

  // function check(){
  //   console.log("control 2");
  // }
  const [count, setCount] = useState(0);

  return (
    <div>
      <DemoButton demFun={check}></DemoButton>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default App;
