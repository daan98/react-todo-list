import React from "react";
import { List } from "@mui/material";
import Todo from "./Todo";

const TodoList = ({ todos, completeTask, removeTask }) => {

    return(
        <List id="tasks-list">
            {todos.map( todo => (
                <Todo
                    actualTask={todo}
                    removeActualTask={removeTask}
                    completeActualTask={completeTask}
                />
            ))}
        </List>
    );
};

export default TodoList;