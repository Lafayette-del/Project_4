import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './answerlist.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AnswerList() {
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch answers from the backend API
        axios.get('http://localhost:3002/answers')
            .then((response) => {
                setAnswers(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError('Failed to load answers. Please try again later.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1>Answer List</h1>
            {loading ? (
                <p>Loading answers...</p>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : answers.length === 0 ? (
                <p>No answers available.</p>
            ) : (
                <Table striped bordered hover className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Answer</th>
                            <th>Question ID</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answers.map((answer, index) => (
                            <tr key={answer.id}>
                                <td>{index + 1}</td>
                                <td>{answer.answer_text}</td>
                                <td>{answer.question_id}</td>
                                <td>{new Date(answer.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}
