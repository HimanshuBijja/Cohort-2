import { useEffect, useState } from "react";


function Todos(props){
  return <div >
    <h1> {props.title} </h1>
    <h2> {props.description} </h2>
  </div>
}

function RenderTodos({todos}){
  return <div>
    {
      todos.map(todo=>

         <Todos key={todo.id}  title = {todo.title} description = {todo.description} ></Todos>
        
      )
    }
  </div>
}

function App() {
  const [todos, setTodos] = useState([]);
  
  async function fetchTodos(){
    const todos = await fetch("http://localhost:3000/todos");
    const json = await todos.json();
  
    setTodos(json.todos);
  }

  useEffect( ()=>{
    fetchTodos();
  }, []);


  return <div>
    <RenderTodos todos={todos}></RenderTodos>
  </div>
}





export default App;
