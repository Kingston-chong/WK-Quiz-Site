import { Link } from 'react-router-dom';
import '../style/AccountButton.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountButton(props){
    return(
        <>  
            <Link className="account-btn-container" to={"/auth/login"}>
                <AccountCircleIcon/>
                <p>{props.currUser}</p>
            </Link>
        </>
    )
}

export default AccountButton;