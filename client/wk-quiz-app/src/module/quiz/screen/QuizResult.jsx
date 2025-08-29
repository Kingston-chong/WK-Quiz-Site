import { useLocation, useParams } from "react-router-dom";
import AppButton from "../../generic/components/AppButton";
import QuizResultPanel from "../components/QuizResultPanel";
import '../style/QuizResult.css'; 


function QuizResult(){

    const {id} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    const storedData = localStorage.getItem(`result/${id}?token=${token}`);
    const resultData = storedData ? JSON.parse(storedData) : [];

    const accuracy = ((resultData.correct / resultData.total)*100).toFixed(2); 
    const isPassed = resultData.totalScore >= resultData.passing ? true: false;
    
    return(
        <>  
        
            <div className="quiz-result-page">
                <div className="quiz-result-title">
                    <h1>Result</h1>
                    <hr/>
                </div>
                
                <div className="quiz-result-top-container">
                    <h1>{resultData.title}</h1>
                    <div className="quiz-result-top">
                        <h1>{accuracy} %</h1>
                        {(()=>{
                            if(isPassed){
                                return (
                                    <p id="quiz-result-pass">Pass</p>
                                );
                            }else{
                                return (
                                    <p id="quiz-result-fail">Fail</p>
                                );
                            }
                        })()}

                    </div>
                </div>

                <QuizResultPanel 
                    correct = {resultData.correct}
                    wrong = {resultData.wrong}
                    score = {resultData.totalScore}
                />

                <AppButton 
                    type='primary' 
                    title='Back To Dashboard' 
                    url='../../WK-Quiz-Site/dashboard'
                />

            </div>
            
        </>
    )
}

export default QuizResult; 