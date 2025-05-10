import { useEffect, useState } from "react";
import axios from "axios";


export function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const value = setInterval(() => {
            axios.get("http://localhost:3000/todos").then((result) => {
                setTodos(result.data.todos);
                setLoading(false);
            });
        }, n * 1000);

        return() => {

            clearInterval(value)
        }
        
    }, [n]);

    return { todos, loading };
}
