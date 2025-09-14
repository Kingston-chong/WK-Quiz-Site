import { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import Quiz from "../data/Quiz";
import '../style/QuizMain.css';
import axios from "axios";

function QuizMain(){
    useEffect(()=>{
        axios.get("https://wk-quiz-site.onrender.com/api/quiz/")
        .then(resp=>{
            setQuizList(resp.data.quizData);
        })
        .catch(err=>console.error("Error"))
    });

    const [quizList,setQuizList] = useState([]);

    return(
        <>
            <div className="quiz-main-page">
                <h1 className="title-standard">All Quiz</h1>

                <div className="quiz-list-container">
                    {  
                        quizList.map((e,index)=>(
                            <QuizCard 
                                title = {e.title}
                                duration = {e.duration}
                                id = {e._id}
                                imgUrl = {e.imgUrl}
                                index = {index}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default QuizMain;