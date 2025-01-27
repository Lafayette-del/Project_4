import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './questionlist.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3002/questions')
            .then((response) => {
                setQuestions(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError('Failed to load questions. Please try again later.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1>Question and Answers</h1>
            {loading ? (
                <p>Loading questions...</p>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <Table striped bordered hover className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr key={question.id}>
                                <td>{question.id}</td>
                                <td>{question.question}</td>
                                <td>{question.answer}</td>
                                <td>{question.category || 'General'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}
