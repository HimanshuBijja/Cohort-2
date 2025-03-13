import React, { useState } from "react";
import { CreateTodo } from "./components/createTodo";
import { RenderTodos } from "./components/renderTodos";
import todoArr from "./components/array";

let count = 4;
function App() {

  const [todo, setTodo] = useState([{
    id : 1,
    title : "a",
    description : "1"
  },{
    id : 2,
    title : "b",
    description : "2"
  },{
    id : 3,
    title : "c",
    description : "3"
  }]);

  function addTodo(){
    setTodo([...todo, {
      id : count++,
      title : Math.random(),
      description : Math.random()
    }])
  }

  // {console.log(count)}
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {
        todo.map(todos => <Todo key = {todos.id} title={todos.title} description={todos.description}></Todo>)
      }
    </div>
  );
}


function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}


export default App;
