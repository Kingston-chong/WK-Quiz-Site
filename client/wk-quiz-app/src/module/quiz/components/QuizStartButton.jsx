import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function QuizStartButton(props){
    return(
        <>  
            <Link to={`../quiz/InQuiz/${props.id}`}>
                <Button 
                    className='btn-primary' 
                    variant="Contained"
                >
                    {props.text}
                </Button>
            </Link>
        </>
    )
}

export default QuizStartButton;