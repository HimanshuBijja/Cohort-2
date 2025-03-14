import { useEffect, useState } from "react";
import axios from "axios"


function RenderTodos({id}){
  const [todos, setTodos] = useState({});
  

  useEffect( ()=>{
    axios.get("http://localhost:3000/todo?id="+id)
      .then((todo)=>{
        setTodos(todo.data.todos);
      })
  }, []);

  return <div>
    
  <h1> {todos.title} </h1>
  <h2> {todos.description} </h2>
  </div>
}

function App() {

  return <div>
    <RenderTodos id={5}></RenderTodos>
  </div>
}

export default App;
