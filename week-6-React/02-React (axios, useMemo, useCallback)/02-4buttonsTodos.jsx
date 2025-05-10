import { useEffect, useState } from "react";
import axios from "axios"


function RenderTodos({id}){
  const [todos, setTodos] = useState({});
  

  useEffect( ()=>{
    axios.get("http://localhost:3000/todo?id="+id)
      .then((todo)=>{
        setTodos(todo.data.todos);
      })
  }, [id]);

  return <div>

    
   id : {id}  
  <h1> {todos.title} </h1>
  <h2> {todos.description} </h2>
  </div>
}

function App() {
  const [id, setId] = useState(1);
  return <div>
    <button onClick={  ()=> setId(1)}>1</button>
    <button onClick={  ()=> setId(2)}>2</button>
    <button onClick={  ()=> setId(3)}>3</button>
    <button onClick={  ()=> setId(4)}>4</button>
    <RenderTodos id={id}></RenderTodos>
  </div>
}

export default App;
