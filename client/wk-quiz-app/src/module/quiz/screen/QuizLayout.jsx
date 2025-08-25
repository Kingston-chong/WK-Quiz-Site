import { Outlet } from "react-router-dom";
import '../style/QuizLayout.css';

function QuizLayout(){
    return(
        <>  
            <div className="quiz-layout-container">
                <Outlet/>
            </div>
        </>
    )
}

export default QuizLayout;