import { RecoilRoot, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { inputAtom, todoAtom } from "./store/atoms/TodoAtoms";

function App(){
 return (
  <RecoilRoot>
    <InputBox/>
    <Todo />
    
  </RecoilRoot>
 )
}

function InputBox(){
  const setInput = useSetRecoilState(inputAtom) 
  return (
    <input type="number"  onChange={(e) => {
      setInput(Number(e.target.value))
    }}/>
  )
}

function Todo(){
  const input = useRecoilValue(inputAtom)
  const Todos = useRecoilValueLoadable(todoAtom((input <= 0 || input > 15 ? 1 : input)))

  if(Todos.state === "loading"){
    return (
      <div>Loading</div>
    )
  }
  else if(Todos.state === "hasValue"){

    return (
      <div>
      {Todos.contents.title} <br />
      {Todos.contents.description}
    </div>
  )
  }
  else if(Todos.state === "hasError"){
    return (
      <div>Enter valid inputs</div>
    )
  }
}



export default App;