import '../style/QuestionBar.css';
import QuizTimer from './QuizTimer';

function QuestionBar(props){
    return(
        <>
            <div className="question-bar-container">
                <h1>Question {props.questionNo} <sub>of {props.total}</sub></h1>
                <div className='question-bar-pts'>{props.pts} pts</div>

                <QuizTimer /> 
            </div>
        </>
    )
}

export default QuestionBar;