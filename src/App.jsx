import Todos from './components/Todos';
import Login from './components/Login';
import { useGlobalContext } from './context/UserContext';

function App() {
  const { user } = useGlobalContext();
  return (
    <main>
      {/* <button onClick={() => setToken((tok) => !tok)}>Click</button> */}
      {user ? <Todos /> : <Login />}
    </main>
  );
}

export default App;
