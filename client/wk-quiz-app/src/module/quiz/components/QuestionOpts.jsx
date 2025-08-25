import { Button } from "@mui/material";
import '../style/QuestionOpts.css';
import { useEffect, useState } from "react";

function QuestionOpts(props){

    const [selectedAns,setSelectedAns] = useState(null);
    const correct = props.correct;
    const [result,setResult] = useState(null);
    
    useEffect(()=>{
        if(selectedAns!=null){
            if(selectedAns==correct){
                setResult(true);
                document.getElementById(`question-opts-${selectedAns}`).setAttribute('id','opt-correct');
            }
            else{
                setResult(false);
                document.getElementById(`question-opts-${selectedAns}`).setAttribute('id','opt-false');
            }
        }
    },[selectedAns])

    return(
        <>
            
            <div className="question-opts-list">
                {props.data.map((e,index)=>(
                    <Button 
                        id={`question-opts-${index}`}
                        className="question-opts-item"
                        index={index}
                        key={index}
                        variant="Contained"
                        onClick={()=>{
                            setSelectedAns(index);
                        }}
                    >
                        {e}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default QuestionOpts;