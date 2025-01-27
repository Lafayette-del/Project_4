import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList({ todos, setTodos }) {
    const [filteredTodos, setFilteredTodos] = useState(todos);

    const showAllTodos = () => {
        setFilteredTodos(todos);
    };

    const showCompletedTodos = () => {
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    };

    const showUncompletedTodos = () => {
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const handleDelete = (event, index) => {
        event.preventDefault();
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1); // Remove the todo at the specified index
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos); // Update the filtered list
    };

    const handleUpdate = (event, index) => {
        event.preventDefault();
        const updatedTodos = [...todos];
        updatedTodos[index] = {
            ...updatedTodos[index], // Keep other properties intact
            todo_text: 'Updated Task', // Example update
        };
        setTodos(updatedTodos);
        setFilteredTodos(updatedTodos); // Update the filtered list
    };

    return (
        <div>
            <div className="mb-3">
                <Button variant="info" onClick={showAllTodos}>All To-Do</Button>&nbsp;
                <Button variant="info" onClick={showCompletedTodos}>Completed To-Do</Button>&nbsp;
                <Button variant="info" onClick={showUncompletedTodos}>Uncompleted To-Do</Button>
            </div>

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo_text} {todo.isCompleted ? '(Completed)' : '(Uncompleted)'}
                    </li>
                ))}
            </ul>

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
                    {filteredTodos.map((todo, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{todo.todo_date || 'N/A'}</td>
                            <td>{todo.todo_text}</td>
                            <td>{todo.isCompleted ? 'Yes' : 'No'}</td>
                            <td>
                                <Button
                                    variant="danger"
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
        </div>
    );
}
