import '../style/AuthSidePanel.css'
import AppLogo from '../../generic/components/AppLogo';

function AuthSidePanel(){
    return(
        <>
            <div className="auth-side-panel-container">
                <AppLogo url="/home/"/>

                <div className='auth-side-panel-content'>
                    <h1>Kickstart Your Journey To Success</h1>
                    
                    <p>&quot;Practice Makes Perfect With The Right Tools&quot;</p>
                </div>
            </div>
        </>
    )
}

export default AuthSidePanel;