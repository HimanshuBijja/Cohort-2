import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// const title = changeName();

function App() {
  

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Headers title="Myname is raman"></Headers>
    </>
  );
}

function HeaderWithButton(){
  const [name, setName] = useState("My name is Himanshu");
  function changeName(){

    setName("My name is " + Math.random());
  }

  return <div>
    <button onClick={changeName}>change name</button> <br/><br/>
    <Headers title={name}></Headers>
  </div>
}

let count = 1;
function Headers({ title }) {
  console.log(count++);
  return <div>{title}</div>;
}

export default App;
