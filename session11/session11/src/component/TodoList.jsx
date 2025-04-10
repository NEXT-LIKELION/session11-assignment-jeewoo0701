import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggleTodo }) => {
    return (
        <List>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    handleToggleTodo={handleToggleTodo}
                />
            ))}
        </List>
    );
};

export default TodoList;
