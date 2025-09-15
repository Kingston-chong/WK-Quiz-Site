import { List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import AppButton from "../../generic/components/AppButton";
import { Link } from "react-router-dom";
import '../style/Register.css';
import InfoIcon from '@mui/icons-material/Info';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function Register(){
    return(
        <>
            <div className="register-container">

                <AppRegistrationIcon/>
                <h1>Sign Up</h1>
                <hr/>
                
                <div className="register-form">
                    <TextField type="email" placeholder="Email" label="Email"/>
                    <TextField placeholder="Username" label="Username"/>
                    <TextField type="password" placeholder="Password" label="Password"/>

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