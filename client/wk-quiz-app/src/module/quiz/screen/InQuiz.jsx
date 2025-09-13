import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Quiz from "../data/Quiz";
import Questions from "../data/Questions";
import QuestionOpts from "../components/QuestionOpts";
import QuizStatusPanel from "../components/QuizStatusPanel";
import QuizHeaderPanel from "../components/QuizHeaderPanel";
import '../style/InQuiz.css';

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
    const [totalWrong,setTotalWrong] = useState(0);
    const [totalScore,setTotalScore] = useState(0);
    const [timeUsed,setTimeUsed] = useState(0);

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
                timeUsed : timeUsed
            }; 

            localStorage.setItem(`result/${quizData.id}?token=${token}`,JSON.stringify(result));
            navigate(`../../result/${quizData.id}?token=${token}`);
        }   
        else if(currNo>0&&currNo<=questionData.length){
            
            setCurrQuestion(questionData[currNo-1]); 
        }

    },[currNo,questionData,quizData,totalCorr,totalScore,token]);

    return(
        <>
            <div className="inquiz-page">

                <QuizHeaderPanel 
                    questionNo = {currNo}
                    title = {quizData.title}
                    total = {questionData.length}
                    pts = {currQuestion.pts}
                    returnTime = {()=>{
                        setTimeUsed(timeUsed+1);
                    }}
                />

                <div className="question-container">
                    <h1>{currQuestion.title}</h1>
                    
                    {
                        currQuestion.nonSelectOpts&&currQuestion.nonSelectOpts.map((e)=>(
                            <p>{e}</p>
                        ))
                    }

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
                        markWrong={()=>{
                            setTotalWrong(totalWrong+1);
                        }}
                   />
                </div>

                <QuizStatusPanel 
                    score = {totalScore}
                    correct = {totalCorr}
                    wrong = {totalWrong}
                />
            </div>
        </>
    )
}

export default InQuiz;