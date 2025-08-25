import DashboardQuizSection from "../components/DashboardQuizSection";
import UserInfoBar from "../components/UserInfoBar";

function Dashboard(){
    return(
        <>
            <UserInfoBar
                username='Morii Kong'
            />
            <DashboardQuizSection/>
        </>
    )
}

export default Dashboard;