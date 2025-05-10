import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { currentTodos, todoAtom } from "./store/atoms/todo";
import { useRef } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <AddTodos />
      </RecoilRoot>
    </div>
  );
}

function AddTodos() {
  const setTodo = useSetRecoilState(todoAtom);
  const todos = useRecoilValue(currentTodos);
  const ref = useRef([{}]);
  let title;
  let description;
  let search;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          // height : "100vh"
        }}
      >
        <input
          onChange={(e) => {
            title = e.target.value;
          }}
          type="text"
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            description = e.target.value;
          }}
          type="text"
          placeholder="Description"
        />
        <button
          onClick={() => {
            setTodo((prevTodos) => [
              ...prevTodos,
              {
                title,
                description,
              },
            ]);
          }}
        >
          Add todo
        </button>
        <input
          onChange={(e) => {
            search = e.target.value;
            ref.current = todos.filter((x) => x.includes(search));
          }}
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <RenderTodos ref = {ref}/>
      </div>
    </div>
  );
}

function RenderTodos({ref}) {
  // const todos = useRecoilValue(currentTodos);
  return (
    <div>
      {ref.map((todo) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent : "center",
              // height : "100vh"
            }}
          >
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
