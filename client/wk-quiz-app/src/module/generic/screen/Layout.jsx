import { Outlet } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import '../style/layout.css';

function Layout(){
    return(
        <>  
            <div className="app-layout">
                <SideBar/>
                <div className="app-layout-content">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
            
        </>
    )
}

export default Layout;