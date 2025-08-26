import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Quiz from "../data/Quiz";
import Questions from "../data/Questions";
import QuestionBar from "../components/QuestionBar";
import QuestionOpts from "../components/QuestionOpts";
import '../style/InQuiz.css';
import AppButton from "../../generic/components/AppButton";

function InQuiz(){

    const {id} = useParams();
    const quizData = Quiz[id-1];
    const questions = Questions[id-1];
    const questionData = questions.data;

    const [currNo,setCurrNo] = useState(1);
    const [currQuestion,setCurrQuestion] = useState(questionData[currNo-1]);
    const navigate = useNavigate();

    const [resultData,setResultData] = useState(null);
    const [totalCorr,setTotalCorr] = useState(0);
    const [totalScore,setTotalScore] = useState(0);

    const token = '1'; //hardcode token for testing only, should random generate

    useEffect(()=>{
        
        if(currNo==questionData.length+1){
            
            setResultData(
                {
                    title : quizData.title,
                    passing : quizData.passing,
                    correct : totalCorr,
                    wrong : questionData.length - totalCorr,
                    total : questionData.length,
                    totalScore : totalScore,
                }
            );
            localStorage.setItem(`result/1?token=${token}`,JSON.stringify(resultData));
            navigate(`../../result/1?token=${token}`);
        }
        else{
            setCurrQuestion(questionData[currNo-1]);    
        }
    });

    return(
        <>
            <div className="inquiz-page">

                <div className="inquiz-panel">
                    <AppButton className='inquiz-page-exit' title='Exit' type='exit' url='../../dashboard'/>
                </div>
                
                <QuestionBar 
                    questionNo = {currNo}
                    total = {questionData.length}
                    pts = {currQuestion.pts}
                />

                <div className="question-container">
                    <h1>{currQuestion.title}</h1>
                    <QuestionOpts 
                        data={currQuestion.opts} 
                        correct={currQuestion.correct}
                        
                        nxQues={()=>{
                            setCurrNo(currNo+1);
                        }}
                        markCorr={()=>{
                            setTotalCorr(totalCorr+1);
                            setTotalScore(totalScore+currQuestion.pts);
                        }}
                   />
                </div>
            </div>
        </>
    )
}

export default InQuiz;