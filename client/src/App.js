import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup'
import 'bootstrap/dist/css/bootstrap.min.css'


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
