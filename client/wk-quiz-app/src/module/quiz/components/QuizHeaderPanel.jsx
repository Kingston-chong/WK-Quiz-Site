import { useState } from 'react';
import AppButton from '../../generic/components/AppButton';
import '../style/QuizHeaderPanel.css';
import QuizTimer from './QuizTimer';

function QuizHeaderPanel(props){

    const [displayTitle,setTitle] = useState(props.title.substring(0,30));

    if(props.length>30){
        setTitle(`${props.title.substring(0,10)}...`);
    }
    
    return(
        <>
            <div className="quiz-header-panel">
                <AppButton title='Exit' type='exit' url='/WK-Quiz-Site/dashboard/'/>
                <h1>{displayTitle}</h1>
                <div className='question-pts'>{props.pts} pts</div>
                <div className='quiz-header-ques'>Q{props.questionNo}   <sub>of {props.total}</sub></div>
                <QuizTimer
                    returnTime = {()=>{props.returnTime()}}
                />
            </div>
        </>
    )
}

export default QuizHeaderPanel;