import '../style/AccountButton.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountButton(props){
    return(
        <>
            <div className="account-btn-container">
                <AccountCircleIcon/>
                <p>{props.currUser}</p>
            </div>
        </>
    )
}

export default AccountButton;