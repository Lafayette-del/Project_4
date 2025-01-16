import logo from './logo.svg';
import './App.css';
import Login from './Login'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
