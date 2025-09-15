import {TextField } from '@mui/material';
import '../style/Login.css';
import AppButton from '../../generic/components/AppButton';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login (){
    return(
        <>  
            <div className='login-container'>

                <AccountCircleIcon/>
                <h1>Sign In</h1>
                <hr/>
                <div className='login-form'>
                    <TextField 
                        type="email"
                        placeholder='Email'
                        label="Email"
                    />
                    <TextField 
                        type='password'
                        placeholder='Password'
                        label="Password"
                    />
                    <Link>Forgot Password</Link>
                    <AppButton
                        type = "primary" 
                        title  = "Login"
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