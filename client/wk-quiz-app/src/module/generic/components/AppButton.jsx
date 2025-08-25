import { Button } from "@mui/material";
import '../style/AppButton.css'

/** Custom MUI Button 
 * params : type, title, url */
function AppButton(props){
    return(
        <>
            <Button className={`btn-${props.type}`} variant="contained" href={props.url}>{props.title}</Button>
        </>
    )
}

export default AppButton;