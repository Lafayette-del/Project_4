import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import validation from './validation';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Run validation
        const validationErrors = validation(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.get("http://localhost:3002/users/", {
                params: {
                    email: formData.email,
                    password: formData.password,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Log-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success">
                        Log in
                    </button>
                    <p>You Agree to the terms and conditions</p>
                    <Link to="/signup" className="btn btn-default border">
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
}
