import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TodoList({todos, setTodos}) {
  //let handleDelete = todos.filter((todo,index)=>index!==pindex)
  //setTodos (newTodoList)

  function TodoList() {
    const [todos, setTodos] = useState([
      // ... your initial todos data ...
    ]);
  
    const handleDelete = (event, index) => {
      event.preventDefault();
      const updatedTodos = [...todos]; 
      updatedTodos.splice(index, 1); 
      setTodos(updatedTodos);
    };
  
    const handleUpdate = (event, index) => {
      event.preventDefault();
      const updatedTodos = [...todos];
      updatedTodos[index] = { 
        // Update the properties of the todo item here 
        ...updatedTodos[index], 
        todo_text: 'Updated Task' 
      };
      setTodos(updatedTodos);
    };
  
  
  return (
    <>
      <Button variant="info">Alltodo</Button>&nbsp;
      <Button variant="info">Completedtodo</Button>&nbsp;
      <Button variant="info">uncompletedtodo</Button>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>To do date</th>
            <th>To do text</th>
            <th>is Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
    
       todos.map ((todo,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{todo.todo_date}</td>
                <td>{todo.todo_text}</td>
                <td>{todo.isCompleted}</td>
                <td><Button variant="warning" onClick={(event)=>handleDelete(event, index)}>Delete</Button></td>
                <td><Button variant="warning" onClick={(event)=>handleUpdate(event, index)}>Update</Button></td>
              </tr>
          ))}
        </tbody>
      </Table>
      </>
  )
  }