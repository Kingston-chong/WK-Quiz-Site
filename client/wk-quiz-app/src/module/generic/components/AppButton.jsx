import { Button } from "@mui/material";
import '../style/AppButton.css'
import { Link } from "react-router-dom";

/** Custom MUI Button 
 * params : type, title, url */

function NavigationButton(props){
    return(
        <>
            <Link className="nav-button-link" to={props.url}>
                <Button className={`btn-${props.type}`} variant="contained">{props.title}</Button>
            </Link>
        </>
    )
};


function AppButton(props){

    if(props.url!=null){
        return(
            <>
                <NavigationButton 
                    url = {props.url}
                    type= {props.type}
                    title = {props.title}
                />  
            </>
        );
    }
    else{
        return(
            <>
                <Button className={`btn-${props.type??"default"}`} variant="contained" href={props.url}>{props.title}</Button>
            </>
        );
    }
    
}

export default AppButton;