import {createTheme } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";
import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";


const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      fetch("src/assets/data.json")
      .then((response) => response.json())
      .then((data) => setTodos(data))   
      .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
    const [priority, setPriority] = useState("medium");
    const [inputValue, setInputValue] = useState("");

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [lastAddedTask, setLastAddedTask] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleAddTodoWithSnackbar = () => {
        if (inputValue.trim()) {
            const newTodo = {
                task: inputValue,
                priority: priority,
                isDone: false,
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
            setLastAddedTask(inputValue);
            setSnackbarOpen(true); 
        }
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { task: inputValue, priority: priority, isDone: false },
            ]);
            setInputValue("");
        }
    };
    const handleToggleTodo = (index) => {
      setTodos(todos.map((todo, i) => 
        i === index?{ ...todo, isDone: !todo.isDone }: todo ));
    }

    useEffect(() => {
        if (snackbarOpen) {
            const timer = setTimeout(() => {
                setSnackbarOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [snackbarOpen]);
        
    return (
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        py: 4,
                        width: "60%",
                        minWidth: "800px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center"
                        fontWeight="bold"
                    >
                        NEXT Todo App
                    </Typography>
                    <TodoForm 
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    handlePriorityChange={handlePriorityChange}
                    handleAddTodo={handleAddTodoWithSnackbar} 
                    priority={priority}
                    />
                    <TodoList todos={todos} handleToggleTodo={handleToggleTodo} />

                    <Snackbar
                    open={snackbarOpen}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    message={`✅ 추가됨: ${lastAddedTask}`}
                />
                </Container>
            </Box>
        
    );
}

export default App;
