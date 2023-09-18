import {
  onSnapshot,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase';

export function readTodos(setTodos) {
  const collectionRef = collection(db, 'todolist');
  const q = query(collectionRef, orderBy('timestamp', 'desc'));

  const unsubrscribe = onSnapshot(q, (snapshot) => {
    setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  return unsubrscribe;
}

export async function doneTodo(id, done) {
  const docRef = doc(db, 'todolist', id);
  done = done ? false : true;
  await updateDoc(docRef, { done });
}

export async function deleteTodo(id) {
  const docRef = doc(db, 'todolist', id);
  await deleteDoc(docRef);
}

export async function addTodo(input) {
  const collectionRef = collection(db, 'todolist');
  const newTodo = {
    todo: input,
    done: false,
    timestamp: serverTimestamp(),
  };

  await addDoc(collectionRef, newTodo);
}

export async function updateTodo(id, todo) {
  const docRef = doc(db, 'todolist', id);
  // setDoc(docRef, { todo }) csak azt módosít, amit átadunk, a többit törli
  await updateDoc(docRef, { todo });
}
