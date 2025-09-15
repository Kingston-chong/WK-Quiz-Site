import { Link } from 'react-router-dom';
import '../style/SideBar.css'
import AppLogo from './AppLogo';

function SideBar(){
    return(
        <>
            <div className='sidebar-container'>
                <AppLogo url="/dashboard/"/>
                
                <ul className="sidebar-nav">
                    <li>
                        <Link to='/dashboard/'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/quiz/'>Quiz</Link>
                    </li>
                    <li>
                        <Link>Achievement</Link>
                    </li>
                    <li>
                        <Link>My History</Link>
                    </li>
                </ul>

                
            </div>
        </>
    )
}

export default SideBar;