import React from "react";
import {
    Checkbox,
    IconButton,
    ListItem,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

const Todo = ({ actualTask, removeActualTask, completeActualTask }) => {

    const handleOnClkickCheckbox = () => {
        completeActualTask(actualTask.id);
    };

    const handleOnClickBtn = () => {
        removeActualTask(actualTask.id);
    };

    return(
        <ListItem id="todo-container">
            <Checkbox onClick={handleOnClkickCheckbox} checked={actualTask.complete} />
            <Typography
                key={actualTask?.id} 
                className={actualTask.complete ? 'todo-task task-completed' : 'todo-task'}
                variant="body1"
            >
                { actualTask.task }
            </Typography>
            <IconButton onClick={handleOnClickBtn}>
                <CloseIcon className="delete-btn" />
            </IconButton>
        </ListItem>
    );
}

export default Todo;