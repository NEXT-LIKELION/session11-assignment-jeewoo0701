import { ListItem, ListItemText, Checkbox } from "@mui/material";

const TodoItem = ({ todo, handleToggleTodo, index }) => {
    return (
        <ListItem>
            <Checkbox
                checked={todo.isDone}
                onChange={() => handleToggleTodo(index)}
            />
            <ListItemText
                primary={
                    <span
                        style={{ 
                            textDecoration: todo.isDone
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {todo.task}
                    </span>
                }
                secondary={`Priority: ${todo.priority}`}
            />
        </ListItem>
    );
};

export default TodoItem;
