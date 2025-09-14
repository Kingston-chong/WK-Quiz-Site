import placeholder from '../../../assets/quiz/q_1.png';
import '../style/QuizDetails.css';
import QuizInfoList from '../components/QuizInfoList';
import QuizStartButton from '../components/QuizStartButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function QuizDetails(){
    const {id} = useParams();
    const [quizData,setQuizData] = useState([]);

    useEffect(()=>{
        const apiURL = import.meta.env.VITE_API_URL;
        axios.get(apiURL+"/quiz/"+id)
        .then(resp=>{
            setQuizData(resp.data.quizData);
        })
        .catch(err=>{
            console.error("Error While Fetching Record ",err);
        })
    })

    const date = new Date(quizData.createdAt).toLocaleDateString(
        "en-MY",
        {
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    )

    return(
        <>
            <div className="quiz-details-page">
                <div className="quiz-details-section">
                    <div className="quiz-details-info">
                        <img src={quizData.imgUrl??placeholder}></img>

                        <div className='quiz-info-list-container'>
                            <QuizInfoList
                                createDate = {date}
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