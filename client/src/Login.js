import react, {useState} from 'react'
import Table from 'react-bootstrap/table';
import { Link } from 'react-router-dom'
import validation from './validation';
import axios from 'axios'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setFormData(prev =>({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log (formData)
        const response = await axios.get ("http://localhost:3002/users/",{
            params: {
              user_name: formData.user_name,
              user_password: formData.user_password,
            },})
            console.log (response)
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log-In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger' > {errors.email}</span>}
                    
                </div>
                <div className= 'mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger' > {errors.password}</span>}
                    
                </div>
                <button type='submit' className= 'btn btn-success'>Log in</button>
                <p>You Agree to the terms and conditions</p>
                <Link to="/signup" className='btn btn-default border'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}