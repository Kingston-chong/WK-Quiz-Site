import {CircularProgress} from "@mui/material";
import '../style/AccuracyCircularPercentage.css';

function AccuracyCircularPercentage(props){
    return(
        <>
            <div className="acc-circular-percentage-container">
                <CircularProgress 
                    className="acc-percentage"
                    variant="determinate"
                    value={props.percentage}
                    color="secondary"
                />
                
                <div className="acc-percentage-indicator">
                <h5>{props.percentage} %</h5>
                    {(()=>{
                        if(props.isPassed){
                            return (
                                <p id="quiz-result-pass">Pass</p>
                            );
                        }else{
                            return (
                                <p id="quiz-result-fail">Fail</p>
                            );
                        }
                    })()}
                    
                </div>
                
            </div>
        </>
    )
}

export default AccuracyCircularPercentage;