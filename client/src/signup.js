import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupvalidation from './signupvalidation';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = signupvalidation(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.get("http://localhost:3002/users/", {
                params: {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_password: formData.password,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-50">
            <div className="bg-white p-3 rounded col-md-6 col-lg-4">
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
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
                        Sign up
                    </button>
                    <p>You Agree to the terms and conditions</p>
                    <Link to="/Login" className="btn btn-default border">
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
