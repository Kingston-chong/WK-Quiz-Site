import { Link } from 'react-router-dom';
import placeholder from '../../../assets/quiz/q_1.png';
import '../style/QuizCard.css';

function QuizCard(props){
    return(
        <>  
            <Link to={`/QuizDetails/${props.id}`} className="quiz-card-container">
                <div className='quiz-card-content overlay'>
                    <p>{props.duration} min</p>
                    <h1>{props.title}</h1>
                </div>
                <div className='quiz-card-desc'>
                    <span>Try This !</span>
                </div>
            </Link>
        </>
    )
}

export default QuizCard;