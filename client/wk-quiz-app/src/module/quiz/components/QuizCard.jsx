import { Link } from 'react-router-dom';
import placeholder from '../../../assets/quiz/q_1.png';
import '../style/QuizCard.css';

function QuizCard(props){

    const getTitle=(title)=>{
        if(title.length>=30){
            return `${title.substr(0,30)}...`;
        }
        return title.substr(0,30);
    }
    
    return(
        <>  
            <Link 
                to={`/WK-Quiz-Site/QuizDetails/${props.id}`} 
                className="quiz-card-container"
                style={{
                    backgroundImage :`url(${props.imgUrl??placeholder})`
                }}
            >
                <div className='quiz-card-content overlay'>
                    <p>{props.duration} min</p>
                    <h1>{getTitle(props.title)}</h1>
                </div>
                <div className='quiz-card-desc'>
                    <span>Try This !</span>
                </div>
            </Link>
        </>
    )
}

export default QuizCard;