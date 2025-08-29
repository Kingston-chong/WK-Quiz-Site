import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
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

    const questionData = useMemo(() => {
        const arr = [...questions.data];
        let currIndex = arr.length;
        while (currIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;
            [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
        }
        return arr;
    }, [questions]);

    const [currNo,setCurrNo] = useState(1);
    const [currQuestion,setCurrQuestion] = useState(questionData[currNo-1]);
    const navigate = useNavigate();
    const [totalCorr,setTotalCorr] = useState(0);
    const [totalScore,setTotalScore] = useState(0);

    const token = crypto.randomUUID();

    useEffect(()=>{
    
        if(currNo ==questionData.length+1){
            
            const result = {
                title : quizData.title,
                passing : quizData.passing,
                correct : totalCorr,
                wrong : questionData.length - totalCorr,
                total : questionData.length,
                totalScore : totalScore,
            }; 

            localStorage.setItem(`result/${quizData.id}?token=${token}`,JSON.stringify(result));
            navigate(`../../WK-Quiz-Site/result/${quizData.id}?token=${token}`);
        }   
        else if(currNo>0&&currNo<=questionData.length){
            setCurrQuestion(questionData[currNo-1]); 
   
        }

    },[currNo,questionData,quizData,totalCorr,totalScore,token]);

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