import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addTodo } from '../util';

const AddTodo = () => {
  const [input, setInput] = useState('');
  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="New todo"
        variant="outlined"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => {
          addTodo(input);
          setInput('');
        }}
      >
        <AddBoxIcon />
      </Button>
    </div>
  );
};

export default AddTodo;
