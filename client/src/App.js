
import './App.css';
import Login from './Login.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup.js'
import React, {useState} from 'react';
import TodoList from './Component/TodoList/TodoList.jsx';
import NavbarMenu from './Component/NavbarMenu/NavbarMenu.jsx';

      
function App() {

    const Initialtodos =  [
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true},
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true},
  ]
  const [todos, setTodos] = useState(Initialtodos);
    
  return (
    <BrowserRouter>
    <NavbarMenu />
      <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/todos' element={<TodoList todos={todos} setTodos={setTodos} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
