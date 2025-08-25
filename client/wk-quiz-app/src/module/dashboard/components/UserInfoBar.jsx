import AccountBoxIcon from '@mui/icons-material/AccountBox';
import UserInfoList from './UserInfoList';
import FlagIcon from '@mui/icons-material/Flag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../style/UserInfoBar.css';

function UserInfoBar(props){

    return(
        <>
            <div className="user-info-bar">
                <AccountBoxIcon className='user-info-bar-img'/>
                <div className="user-info">
                    <h1>{props.username}</h1>

                    <div className="user-result">
                       <UserInfoList icon={<FlagIcon sx={{color: 'rgba(90, 25, 202, 1)'}}/>} label='Quiz Passed' value={0}/>
                       <UserInfoList icon={<CheckCircleIcon sx={{color:'green'}}/>} label='Correct Answer' value={0}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfoBar;