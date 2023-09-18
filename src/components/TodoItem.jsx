import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { deleteTodo, doneTodo } from '../util';
import EditTodo from './EditTodo';
import { useState } from 'react';

const TodoItem = ({ id, todo, done }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="delete"
              sx={{ marginRight: '2rem' }}
              onClick={() => deleteTodo(id)}
            >
              <DeleteIcon sx={{ color: '#b90e0a' }} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => setOpen(true)}
            >
              <CreateIcon sx={{ color: '#33441b' }} />
            </IconButton>
          </>
        }
        disablePadding
        sx={{ borderBottom: '1px solid lightgray', margin: '0.75rem 0' }}
      >
        <ListItemButton
          role={undefined}
          onClick={() => doneTodo(id, done)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={done}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': id }}
            />
          </ListItemIcon>
          <ListItemText id={id} primary={todo} />
        </ListItemButton>
      </ListItem>
      {open && <EditTodo open={open} setOpen={setOpen} id={id} todo={todo} />}
    </>
  );
};
export default TodoItem;
