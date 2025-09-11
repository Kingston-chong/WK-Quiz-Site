import { LinearProgress } from '@mui/material';
import '../style/QuizResultIndicator.css';

function QuizResultIndicator(props){
    return(
        <>  
            <div className='quiz-result-indicator-container'>

                <div className='quiz-result-indicator-bar-container'>
                    <div
                        className='quiz-result-label'
                        style={{left:`${props.accuracy}%`}}    
                    >
                        {props.accuracy}%
                    </div>
                    
                    <LinearProgress 
                        className='quiz-result-indicator-bar'
                        variant='determinate'
                        value={props.accuracy}
                        color='inherit'
                        
                    />
                </div>

                <div className='quiz-result-indicator-bar-label'>
                    <p>Your Score</p>
                    <p>Total Question</p>
                </div>
                
               
            </div>
            
            
        </>
    )
}

export default QuizResultIndicator;