import { Button } from "@mui/material";
import '../style/QuestionOpts.css';
import { useEffect, useState } from "react";

function QuestionOpts(props){

    const [selectedAns,setSelectedAns] = useState(null);
    const correct = props.correct;
    const [showResult,setShowResult] = useState(false);
    
    useEffect(()=>{

        if(selectedAns!=null){

            const isCorrect = selectedAns === correct;

            if(isCorrect){
                props.markCorr();
            }
            
            setShowResult(true);
    
            const timer = setTimeout(()=>{
                props.nxQues();
                setSelectedAns(null);
                setShowResult(false);
            },2000)

            return ()=> clearTimeout(timer);
        }
    },[selectedAns])

    const getOptClass=(index)=>{
        if (!showResult){
            return "question-opts-item";
        } 

        if (index === correct) {
            return "opt-correct";
        }

        if (index === selectedAns && index !== correct){
            return "opt-false";
        } 
        return "question-opts-item";
    }

    return(
        <>
            
            <div className="question-opts-list">
                {props.data.map((e,index)=>(
                    <Button 
                    
                        className={getOptClass(index)}
                        index={index}
                        key={index}
                        variant="contained"
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