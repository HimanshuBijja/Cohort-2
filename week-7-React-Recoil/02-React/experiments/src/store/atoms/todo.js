import { atom, selector } from 'recoil'

export const todoAtom = atom({
    key : "todoAtom",
    default : [{
        title : "",
        description : ""
    }]
});



export const filter = atom({
    key : "filter",
    default : ""
})


export const currentTodos = selector({
    key : "currentTodos",
    get : ({get})=>{
        const todos = get(todoAtom);
        return todos;
    }
})
