import {TextField } from '@mui/material';
import '../style/Login.css';
import AppButton from '../../generic/components/AppButton';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { useState } from 'react';

function Login ({setAuth}){

    const apiUrl = import.meta.env.VITE_API_URL;
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${apiUrl}/auth/login`,{
                username:username,
                password:password
            });

            localStorage.setItem("token",res.data.token);
            setAuth(true);
            navigate("../../dashboard?token="+res.data.token);
        } catch (error) {
            alert("Login Failed");
        }    
    }

    return(
        <>  
            <div className='login-container'>

                <AccountCircleIcon/>
                <h1>Sign In</h1>
                <hr/>
                <div className='login-form'>
                    <TextField 
                        type="username"
                        placeholder='Username'
                        label="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <TextField 
                        type='password'
                        placeholder='Password'
                        label="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Link>Forgot Password</Link>
                    <AppButton
                        type = "primary" 
                        title  = "Login"
                        onclick = {handleLogin}
                    />
                </div>

                <div className='to-register'>
                    <p>Does Not Have An Account ?</p>
                    <AppButton 
                        title = "Sign Up Here"
                        url = "/auth/register/"
                    />
                </div>

            </div>
            
        </>
    )
}

export default Login;