import { LinearProgress } from '@mui/material';
import '../style/QuizProgressBar.css'

function QuizProgressBar(props){
    return(
        <>
            <div className='quiz-progress-bar-container'>
                <LinearProgress className="quiz-progress-bar" variant='determinate' color='warning' value={props.progress}/>
                <p>{props.progress}%</p>
            </div>
        </>
    )
}

export default QuizProgressBar;