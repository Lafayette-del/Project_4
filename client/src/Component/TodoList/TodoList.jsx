import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TodoList({todos, setTodos}) {
  //let handleDelete = todos.filter((todo,index)=>index!==pindex)
  //setTodos (newTodoList)

   function handleDelete (pindex) {
     console.log ("sdfsdffd")
   }


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
                <td><Button variant="warning">Update</Button></td>
              </tr>
          ))}
        </tbody> 
      </Table>
    </>
  )
  }
