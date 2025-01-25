import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList({ todos, setTodos }) {
  const handleDelete = (event, index) => {
    event.preventDefault();
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); // Remove the todo at the specified index
    setTodos(updatedTodos);
  };

  const handleUpdate = (event, index) => {
    event.preventDefault();
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index], // Keep other properties intact
      todo_text: 'Updated Task', // Example update
    };
    setTodos(updatedTodos);
  };

  return (
    <>
      <Button variant="info">All To-Do</Button>&nbsp;
      <Button variant="info">Completed To-Do</Button>&nbsp;
      <Button variant="info">Uncompleted To-Do</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>To-Do Date</th>
            <th>To-Do Text</th>
            <th>Is Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.todo_date}</td>
              <td>{todo.todo_text}</td>
              <td>{todo.isCompleted ? 'Yes' : 'No'}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={(event) => handleDelete(event, index)}
                >
                  Delete
                </Button>{' '}
                <Button
                  variant="warning"
                  onClick={(event) => handleUpdate(event, index)}
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
