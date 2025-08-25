import '../style/QuestionBar.css';

function QuestionBar(props){
    return(
        <>
            <div className="question-bar-container">
                <h1>Question {props.questionNo}</h1>
                <div className='question-bar-pts'>{props.pts}</div>
            </div>
        </>
    )
}

export default QuestionBar;