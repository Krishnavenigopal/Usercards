import React, {useState,useEffect} from 'react'
import { emailValidator, passwordValidator } from '../../utilities/validator'
import './Login.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({email:'', password:''})
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('auth'))
            navigate('/')
    },[])

    const handleChange = event => {
        setInput({...input, [event.target.name]: event.target.value});
    };
    const formSubmitter = e => {
        e.preventDefault();
        if(!emailValidator(input.email)) 
            return setErrorMessage('Please enter valid email id');

        if (!passwordValidator(input.password))
			return setErrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
        
        if(input.email !== 'admin@card.com' || input.password !== 'Password@123') return setErrorMessage('Invalid email or password');
        navigate('/')
        localStorage.setItem('auth',true);
       
    };
    return (
        <div className='login_container'>
            <div className='wrapper'>
                <form onSubmit={formSubmitter}>
                <h1>Login</h1> 
                 {errorMessage.length > 0 && <div className='error'>{errorMessage}</div>}
                   <div className='input-box'> <input type='text' name='email' placeholder='Enter your email' onChange={handleChange} required/></div>
                    <div className='input-box'><input type='password' name='password' placeholder='Enter your password' onChange={handleChange} required/></div>
                    <button type="submit">Login</button>
                </form>
                </div>
        </div>
    )
}

export default Login;