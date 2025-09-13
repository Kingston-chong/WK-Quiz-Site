import { Outlet } from "react-router-dom";
import '../style/QuizLayout.css';
import { useEffect } from "react";

function QuizLayout(){
    useEffect(()=>{
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ""; 
          };
      
          window.addEventListener("beforeunload", handleBeforeUnload);
      
          return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
          };
    },[])
    return(
        <>  
            <div className="quiz-layout-container">
                <Outlet/>
            </div>
        </>
    )
}

export default QuizLayout;