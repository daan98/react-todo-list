import React, { useState } from "react";
import { v4 as uuidv4 } from "../../node_modules/uuid";
import { Button, TextField } from "@mui/material";

const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false
    });

    function handleOnchangeTask(e) {
        setTodo({...todo, task: e.target.value});
    };

    function handleOnSubmit(e) {
        e.preventDefault();

        if(todo.task.trim()) {
            setTodo({...todo, id: uuidv4()});
            console.log("todo: ", todo, "\nuuid v4: ", uuidv4());
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""});

        } else {
            alert("Please write your task.");
        }
    }

    return(
        <>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    label="Tasks"
                    name="task"
                    type="text" 
                    value={todo.task} 
                    onChange={handleOnchangeTask}
                />
                <Button type="submit" id="submit-btn" >Add Todo</Button>
            </form>
        </>
    );
};

export default TodoForm;