import { useLocation, useParams } from "react-router-dom";
import AppButton from "../../generic/components/AppButton";
import QuizResultPanel from "../components/QuizResultPanel";
import '../style/QuizResult.css'; 
import AccuracyCircularPercentage from "../components/AccuracyCircularPercentage";


function QuizResult(){

    const {id} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    const storedData = localStorage.getItem(`result/${id}?token=${token}`);
    const resultData = storedData ? JSON.parse(storedData) : [];

    const accuracy = ((resultData.correct / resultData.total)*100).toFixed(2); 
    const isPassed = resultData.totalScore >= resultData.passing ? true: false;

    var filler = '0';
    if(resultData.timeUsed%60>=10){
        filler = '';
    }
    const timeUsed = `${(resultData.timeUsed/60).toFixed(0)}:${filler}${(resultData.timeUsed%60)}`;
    
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
                        <AccuracyCircularPercentage percentage = {accuracy} isPassed={isPassed}/>
                    </div>
                    
                </div>

                <QuizResultPanel 
                    correct = {resultData.correct}
                    wrong = {resultData.wrong}
                    score = {resultData.totalScore}
                    timeUsed = {timeUsed}
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