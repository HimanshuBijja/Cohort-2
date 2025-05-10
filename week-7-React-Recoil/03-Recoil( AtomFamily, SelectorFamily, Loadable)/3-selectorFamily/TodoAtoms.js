import { atom, atomFamily, selectorFamily } from "recoil";
// import { Todos } from "../files/todos";
import axios from "axios";

export const inputAtom = atom({
    key : "inputAtom",
    default : 1
})

export const todoAtom = atomFamily({
    key : "todoAtom",
    default : selectorFamily({
        key : "todoSelector",
        get : (id) => async ({get}) =>{
            const res = await axios.get(`http://localhost:3000/todo?id=${id}`)
            return res.data.todos;            
        }
    })

    
})