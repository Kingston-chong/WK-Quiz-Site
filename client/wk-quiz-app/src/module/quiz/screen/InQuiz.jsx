import { useParams } from "react-router-dom";
import { useState } from "react";
import Quiz from "../data/Quiz";
import Questions from "../data/Questions";
import QuestionTitle from "../components/QuestionTitle";
import QuestionOpts from "../components/QuestionOpts";
import '../style/InQuiz.css';
import AppButton from "../../generic/components/AppButton";

function InQuiz(){

    const {id} = useParams();
    const quizData = Quiz[id-1];
    const questions = Questions[id-1];
    const questionData = Questions[id-1].data;

    const [currNo,setCurrNo] = useState(1);
    const [currQuestion,setCurrQuestion] = useState(questionData[currNo-1]);

    return(
        <>
            <div className="inquiz-page">

                <div className="inquiz-panel">
                    <AppButton className='inquiz-page-exit' title='Exit' type='exit' url='../../dashboard'/>
                    
                </div>
                
                <QuestionTitle 
                    questionNo = {currNo}
                />

                <div className="question-container">
                    <h1>{currQuestion.title}</h1>
                    <QuestionOpts data={currQuestion.opts} correct={currQuestion.correct}/>
                </div>
            </div>
        </>
    )
}

export default InQuiz;