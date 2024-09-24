import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const TodoContextProvider = TodoContext.Provider;

const useTodo = () => {
    return (
        useContext(TodoContext)
    )
}

export default useTodo;