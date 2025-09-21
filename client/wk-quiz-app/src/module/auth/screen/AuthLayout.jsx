import { Outlet } from "react-router-dom";
import "../style/AuthLayout.css";   
import AuthSidePanel from "../component/AuthSidePanel";

function AuthLayout(){
    return(
        <>  
            <div className="auth-layout-container">
                <AuthSidePanel/>
                <Outlet/>
            </div>
        </>
    )
}

export default AuthLayout;