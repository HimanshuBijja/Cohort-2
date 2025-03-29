import { useContext, useRef, useState } from "react";
import { CountContext } from "./components/context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App(){

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log("rerendered");
  return (
    <div>
      <br />
      <CountRenderer/>
      <Buttons />
      <Even/>
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (
    <div>
      
      {count}
    </div>
    
  )
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{
        setCount((count) => {
          return count+1;
        });
      }}>Increase</button>
      <button onClick={()=>{
        setCount((count)=>{
          return count-1;
        });
      }}>Decrease</button>
    </div>
  )
}


function Even(){
  const ref = useRef(0);

  console.log(ref.current++);
  const count = useRecoilValue(evenSelector);
  return <div>{count ? "it is even" : null }</div>
}

export default App;
