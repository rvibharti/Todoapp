import { Routes, Route } from 'react-router-dom';
import About from './Componenet/About';
import Home from './Componenet/Home';
import TodoList from './Componenet/TodoList';
import Logout from './Componenet/Logout';
import NavBar from './NavBar';
import Login from './Componenet/Login';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='TodoList' element={<TodoList />}></Route>
        <Route path='Logout' element={<Logout />}></Route>
        <Route path='LogIn' element={<Login />}></Route>

      </Routes >
    </>
  );
}

export default App;
