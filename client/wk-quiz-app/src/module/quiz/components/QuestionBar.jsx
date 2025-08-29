import '../style/QuestionBar.css';

function QuestionBar(props){
    return(
        <>
            <div className="question-bar-container">
                <h1>Question {props.questionNo} <sub>of {props.total}</sub></h1>
                <div className='question-bar-pts'>{props.pts} pts</div>
            </div>
        </>
    )
}

export default QuestionBar;