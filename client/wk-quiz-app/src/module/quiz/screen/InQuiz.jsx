import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import QuestionOpts from "../components/QuestionOpts";
import QuizStatusPanel from "../components/QuizStatusPanel";
import QuizHeaderPanel from "../components/QuizHeaderPanel";
import '../style/InQuiz.css';
import axios from "axios";

function InQuiz(){

    const {id} = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [quizData,setQuizData] = useState([]);
    const [questions,setQuestion] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const quizResp = await axios.get(apiUrl+"/quiz/"+id)
                setQuizData(quizResp.data.quizData);
                
                const quesId = quizResp.data.quizData.questions;
                const quesResp = await axios.get(apiUrl+"/question/"+quesId)
                setQuestion(quesResp.data.questions.questionData);
                
            } catch (err) {
                console.error("Error fetching Data : ",err);
            }
        }
        fetchData();
    },[id,apiUrl]);

    const navigate = useNavigate();
    const [totalCorr,setTotalCorr] = useState(0);
    const [totalWrong,setTotalWrong] = useState(0);
    const [totalScore,setTotalScore] = useState(0);
    const [timeUsed,setTimeUsed] = useState(0);
    const [userAction,setUserAction] = useState([]);
    const token = crypto.randomUUID();
    
    const shuffledQuestion = useMemo(() => {
        const arr = [...questions];
        let currIndex = arr.length;
        while (currIndex !== 0) {
            const randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;
            [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
        }
        return arr;
    }, [questions])

    const [currNo,setCurrNo] = useState(1);
    const [currQuestion,setCurrQuestion] = useState([]);

    useEffect(()=>{

        if(shuffledQuestion.length>0){
            if(currNo>0&&currNo<=shuffledQuestion.length){
                setCurrQuestion(shuffledQuestion[currNo-1]); 
            }
        
            if(currNo==shuffledQuestion.length+1){
                
                const result = {
                    title : quizData.title,
                    passing : quizData.passing,
                    correct : totalCorr,
                    wrong : shuffledQuestion.length - totalCorr,
                    total : shuffledQuestion.length,
                    totalScore : totalScore,
                    timeUsed : timeUsed,
                    userAction:userAction
                }; 
    
                localStorage.setItem(`result/${quizData._id}?token=${token}`,JSON.stringify(result));
                navigate(`../../result/${quizData._id}?token=${token}`);
            }   
        }
        

    },[currNo,shuffledQuestion,quizData,totalCorr,totalScore,token]);

    if(shuffledQuestion.length>0){
        return(
            <>  
                <div className="inquiz-page">
    
                    <QuizHeaderPanel 
                        questionNo = {currNo}
                        title = {quizData.title??""}
                        total = {shuffledQuestion.length}
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
                            data={currQuestion.opts??[]} 
                            correct={currQuestion.correct}
                            nxQues={(select,res)=>{
                                setUserAction(prev=>[
                                    ...prev,{
                                        "no":currNo,
                                        "ques":currQuestion,
                                        "select":select,
                                        "res":res
                                    }
                                ]);
                                console.log(userAction);
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
}

export default InQuiz;