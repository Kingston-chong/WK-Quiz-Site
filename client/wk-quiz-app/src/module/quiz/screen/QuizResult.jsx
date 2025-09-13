import { useLocation, useParams } from "react-router-dom";
import AppButton from "../../generic/components/AppButton";
import QuizResultPanel from "../components/QuizResultPanel";
import '../style/QuizResult.css'; 
import QuizSummaryPanel from "../components/QuizSummaryPanel";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

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

                <QuizResultPanel
                    pass = {isPassed}
                    accuracy={accuracy}
                />

                <List className='quiz-summary-quizname'>
                    <ListItem>
                        <ListItemText>Quiz Taken</ListItemText>
                        <ListSubheader>{resultData.title}</ListSubheader>
                    </ListItem>
                </List>

                <QuizSummaryPanel 
                    title={resultData.title}
                    correct = {resultData.correct}
                    wrong = {resultData.wrong}
                    score = {resultData.totalScore}
                    timeUsed = {timeUsed}
                />

                <AppButton 
                    type='primary' 
                    title='Back To Dashboard' 
                    url='/dashboard/'  
                />

            </div>
            
        </>
    )
}

export default QuizResult; 