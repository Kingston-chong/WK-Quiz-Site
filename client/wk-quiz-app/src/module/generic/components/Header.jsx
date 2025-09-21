import '../style/header.css'
import AccountButton from './AccountButton';
import AppButton from './AppButton';
import SearhBar from './SearchBar';

function Header(){
    return(
        <>
            <div className="header-container">

                <SearhBar/>

                <AppButton 
                    type='primary'
                    title='Search'
                    variant='contained'
                />
                
                <AccountButton currUser = 'USER'/>
            </div>
           
        </>
    )
}

export default Header;