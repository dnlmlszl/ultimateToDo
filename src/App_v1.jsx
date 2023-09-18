import { useEffect } from 'react';
import { db } from './firebase';
import { onSnapshot, collection } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todolist'), (snapshot) => {
      // console.log(snapshot.docs);
      console.log(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <h1>Hello Firebase</h1>
    </>
  );
}

export default App;
