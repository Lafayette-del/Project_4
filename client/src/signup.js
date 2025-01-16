import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
     <div classname='d-flex justify-content-center align-items-center bg primary vh-50'>
            <div classname='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="">
                    <div classname='mb-3'>
                        <label htmlFor="name">Email</label>
                        <input type="text" placeholder='Enter Name' classname='form-control rounded-0'/>
                    </div>
                    <div classname= 'mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password'classname='form-control rounded-0'/>
                    </div>
                    <button classname= 'btn btn-success'> Sign up</button>
                    <p>You Agree to the terms and conditions</p>
                    <Link to="/Login" classname='btn btn-default border'>Login</Link>
                </form>
            </div>
        </div>
  )
}
