import placeholder from '../../../assets/quiz/q_1.png';
import '../style/QuizDetails.css';
import QuizInfoList from '../components/QuizInfoList';
import QuizStartButton from '../components/QuizStartButton';
import { useParams } from 'react-router-dom';
import Quiz from '../data/Quiz';



function QuizDetails(){
    const {id} = useParams();
    const quizData = Quiz[id-1];

    return(
        <>
            <div className="quiz-details-page">
                <div className="quiz-details-section">
                    <div className="quiz-details-info">
                        <img src={placeholder}></img>

                        <div className='quiz-info-list-container'>
                            <QuizInfoList/>
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