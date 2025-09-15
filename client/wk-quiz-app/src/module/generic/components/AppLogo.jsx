import { Link } from 'react-router-dom';
import '../style/AppLogo.css';

function AppLogo(props){
    return(
        <>  
            <Link className="app-logo-container" to={props.url}>
                <div className="app-logo"></div>
            </Link>
            
        </>
    )
}

export default AppLogo;