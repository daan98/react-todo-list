import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import '../style.css';

const LOCAL_STORAGE_KEY = "react-todo-list";

const App = () => {

    const [todos, setTodos] = useState([]);
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    useEffect(() => {
        console.log('local storage: ', localStorage.getItem(LOCAL_STORAGE_KEY));
        const localStorageTodos = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [];

        console.log('localStorageTodos: ', localStorageTodos);

        if(localStorageTodos.length > 0) {
            setTodos(localStorageTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const completeTask = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }

            return todo;
        }))
    };

    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <>
            <Typography variant="h1" style={{padding: 16}}>
                Todo list react app
            </Typography>

            <TodoForm addTodo={addTodo}  />
            <TodoList
                todos={todos}
                completeTask={completeTask}
                removeTask={removeTask}
            />
            
        </>
    );
};

export default App;