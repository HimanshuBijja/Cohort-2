import React, { useState } from "react";

function App() {
  const [name, setName] = useState("My name is Himanshu");
  function changeName() {
    setName("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeName}>change name</button>
      <Headers title={name}></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
      <Headers title="Myname is raman"></Headers>
    </div>
  );
}

const Headers = React.memo(function Headers({ title }) {
  return <div>{title}</div>
});

export default App;
