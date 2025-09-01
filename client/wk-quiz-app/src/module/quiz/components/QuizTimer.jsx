import { useEffect, useState } from "react";
import '../style/QuizTimer.css'

function QuizTimer(){

    const [second,setSecond] = useState(0);
    const [min,setMin] = useState(0);

    const [time,setTime] = useState("0:00");

    useEffect(()=>{

        setTimeout(() => {
            setSecond(second+1);

            if(second>=59){
                setMin(min+1)
                setSecond(0);
            }
            
            var filler = '0';

            if(second>=10){
                filler = '';
            }

            setTime(`${min}:${filler}${second}`);
        },1000);

    },[second])

    return(
        <>
            <div className="quiz-timer-container">
                <h5>
                    {time}
                </h5>
            </div>
        </>
    )
}; 

export default QuizTimer;