import { useState } from 'react';
import AppButton from '../../generic/components/AppButton';
import '../style/QuizHeaderPanel.css';
import QuizTimer from './QuizTimer';
import QuizProgressBar from './QuizProgressBar';

function QuizHeaderPanel(props){

    const [displayTitle,setTitle] = useState(props.title.substring(0,30));

    const progress = ((props.questionNo/props.total)*100).toFixed(0);

    if(props.length>30){
        setTitle(`${props.title.substring(0,10)}...`);
    }
    
    return(
        <>  
            <div className='quiz-header-bg'>
                <div className="quiz-header-panel-container">
                    <div className="quiz-header-panel">
                        <AppButton title='Exit' type='exit' url='/dashboard/'/>
                        <h1>{displayTitle}</h1>
                        <div className='question-pts'>{props.pts} pts</div>
                        <div className='quiz-header-ques'>Q{props.questionNo}   <sub>of {props.total}</sub></div>
                        <QuizTimer
                            returnTime = {()=>{props.returnTime()}}
                        />
                    </div>
                    
                    <QuizProgressBar progress={progress}/>
                </div>
            </div>
            
            
            
        </>
    )
}

export default QuizHeaderPanel;