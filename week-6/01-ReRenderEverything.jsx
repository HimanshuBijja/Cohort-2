import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// const title = changeName();

function App() {
  const [name, setName] = useState("My name is Himanshu");
  function changeName(){

    setName("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={changeName}>change name</button>
      <Headers title={name}></Headers>
      <Headers title="Myname is raman"></Headers>
    </>
  );
}

function Headers({ title }) {
  return <div>{title}</div>;
}

export default App;
