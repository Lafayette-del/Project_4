import react, {useState} from 'react'
import Table from 'react-bootstrap/table';
import { Link } from 'react-router-dom'
import signupvalidation from './signupvalidation';


export default function Signup() {
       const [values, setValues] = useState({
           name: '',
           email: '',
           password: ''
       })
       const [errors, setErrors] = useState({})
       const handleInput = (event) =>{
           setValues(prev =>({...prev,[event.target.name]: [event.target.value]}))
       }
       const handleSubmit =(event) =>{
           event.preventDefault();
           //setErrors(Validation(values));
       }
  return (
     <div classname='d-flex justify-content-center align-items-center bg primary vh-50'>
            <div classname='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div classname='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Name' name= 'name'
                        onChange={handleInput} classname='form-control rounded-0'/>
                        {errors.name && <span classname='text-danger' > {errors.name}</span>}
                    </div>
                    <div classname= 'mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email'name= 'email'
                        onChange={handleInput} classname='form-control rounded-0'/>
                        {errors.email && <span classname='text-danger' > {errors.email}</span>}
                    </div>
                    <div classname= 'mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name= 'password'
                        onChange={handleInput} classname='form-control rounded-0'/>
                        {errors.password && <span classname='text-danger' > {errors.password}</span>}
                    </div>
                    <button type= "submit" classname= 'btn btn-success'> Sign up</button>
                    <p>You Agree to the terms and conditions</p>
                    <Link to="/Login" classname='btn btn-default border'>Login</Link>
                </form>
            </div>
        </div>
  )
}
