import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

const TodoForm = ({inputValue,
    handleInputChange,
    handlePriorityChange,
    handleAddTodo,
    priority}) => {
    return ( 
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
         <TextField fullWidth label="Task" variant="outlined" value ={inputValue} onChange={handleInputChange} />
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel>Priority</InputLabel>
                            <Select label="Priority" defaultValue="medium" onChange={handlePriorityChange}> 
                                <MenuItem value="high">High</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="low">Low</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: "160px" }}
                            onClick={handleAddTodo}
                        >
                            Add Task
                        </Button>
    </Box>
    )
}

export default TodoForm;