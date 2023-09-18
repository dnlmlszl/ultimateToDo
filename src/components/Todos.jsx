import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Logout from './Logout';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { readTodos } from '../util';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = readTodos(setTodos);

    return () => unsubscribe();
  }, []);

  return (
    <>
      <section className="todos">
        <div className="todo-container">
          <h2>
            <span>LMD</span> TaskHub
          </h2>
          <Logout />
        </div>
        <AddTodo />
        <List
          sx={{ width: '85%', bgcolor: 'background.paper', margin: '0 auto' }}
        >
          {todos?.map((item) => {
            return <TodoItem key={item.id} {...item} />;
          })}
        </List>
      </section>
    </>
  );
};

export default Todos;
