import { List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import AppButton from "../../generic/components/AppButton";
import { Link } from "react-router-dom";
import '../style/Register.css';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useState } from "react";
import axios from "axios";

function Register(){

    const [email,setEmail] = useState(null);
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleRegister = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(
                apiUrl+"auth/register",
                {
                    email:email,
                    username:username,
                    password:password
                }
            );

            alert("Account Created"); 
            navigate("../login");
        } catch (error) {
            alert("Registration Error");
        }
    }
    
    return( 
        <>
            <div className="register-container">

                <AppRegistrationIcon/>
                <h1>Sign Up</h1>
                <hr/>
                
                <div className="register-form">
                    <TextField type="email" placeholder="Email" label="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField placeholder="Username" label="Username" onChange={(e)=>setUsername(e.target.value)}/>
                    <TextField type="password" placeholder="Password" label="Password" onChange={(e)=>setPassword(e.target.value)}/>

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <InfoIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText>
                            <p>Password length at least 12-20 characters, includes a mix of uppercase letters, lowercase letters, numbers, and special symbols</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                    
                    <TextField type="password" placeholder="Reenter Password" label="Reenter Password"/>
                    <AppButton type="primary" title="Create Account"/>
                </div>

                <div className="to-login">
                    <p>Already Have An Account ?</p>
                    <Link to={'/auth/login/'}>Login Here</Link>
                </div>
            </div>
        </>
    )
}

export default Register; 