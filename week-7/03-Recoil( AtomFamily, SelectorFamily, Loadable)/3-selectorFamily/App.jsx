import { RecoilRoot, useRecoilValue } from "recoil"
import { todoAtom } from "./store/atoms/TodoAtoms";

function App(){
 return (
  <RecoilRoot>
    <Todo id = {1}/>
    <Todo id = {5}/>
  </RecoilRoot>
 )
}

function Todo({id}){
  const Todos = useRecoilValue(todoAtom(id))
  return (
    <div>
      {Todos.title} <br />
      {Todos.description}
    </div>
  )
}



export default App;