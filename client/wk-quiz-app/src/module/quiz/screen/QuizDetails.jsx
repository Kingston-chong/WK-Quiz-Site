import placeholder from '../../../assets/quiz/q_1.png';
import '../style/QuizDetails.css';
import QuizInfoList from '../components/QuizInfoList';
import QuizStartButton from '../components/QuizStartButton';
import { useParams } from 'react-router-dom';
import Quiz from '../data/Quiz';
import { useEffect, useState } from 'react';
import axios from 'axios';

function QuizDetails(){
    const {id} = useParams();
    //const quizData = Quiz[id-1];

    const [quizData,setQuizData] = useState([]);

    useEffect(()=>{
        axios.get("https://wk-quiz-site.onrender.com/api/quiz/"+id)
        .then(resp=>{
            setQuizData(resp.data.quizData);
        })
        .catch(err=>{
            console.error("Error While Fetching Record ",err);
        })
    })

    return(
        <>
            <div className="quiz-details-page">
                <div className="quiz-details-section">
                    <div className="quiz-details-info">
                        <img src={quizData.imgUrl??placeholder}></img>

                        <div className='quiz-info-list-container'>
                            <QuizInfoList
                                createDate = {quizData.createdAt}
                                duration = {quizData.duration}
                                attempt = {0}
                                passing = {quizData.passing}
                                creator = {quizData.creator??"Anonymous"}
                            />
                            <QuizStartButton text='Start Quiz' id={id}/>
                        </div>
                        
                    </div>

                    <div className="quiz-details-desc">
                        <h1 className="heading-standard">{quizData.title??'Introduction To Quiz'}</h1>
                        <p className="text-standard">{quizData.desc??'No Description Available'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizDetails;