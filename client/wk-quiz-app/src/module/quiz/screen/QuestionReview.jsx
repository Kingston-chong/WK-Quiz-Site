import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import DangerousIcon from '@mui/icons-material/Dangerous';
import '../style/QuestionReview.css';

function QuestionOptsList(props){

    if(props.opts!=null){
        if(props.type=="mul"){
            return(
                <>
                    <ul style={{listStyle:"none"}}>
        
                        {props.opts.map((e)=>(
                            <li>
                                {e}
                            </li>
                        ))}
                        
                    </ul>
                </>
            )
        }
        else{
            return(
                <>
                    <ol type='A'>
        
                        {props.opts.map((e)=>(
                            <li>
                                {e}
                            </li>
                        ))}
                        
                    </ol>
                </>
            )
        }
    }
    
}

function getAlpha(no){
    const asciiOffset = 64; 
    
    return String.fromCharCode(no+1+asciiOffset);
}

function ResultIcon(props){

    if(props.res){
        return(
            <ListItemIcon>
                <CheckIcon color="success"/>
            </ListItemIcon>
        )
    }
    else{
        return(
            <ListItemIcon>
                <DangerousIcon color="error"/>
            </ListItemIcon>
        )
    }
    
}

function QuestionReview(){

    const {id} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    const storedData = localStorage.getItem(`result/${id}?token=${token}`);
    const resultData = storedData ? JSON.parse(storedData) : [];

    const [userAction,setuserAction] = useState(resultData.userAction);

    return(
        <>
            <div className="question-review-container">

                <List className="question-review-list">
                    {userAction.map((e)=>(

                        <List>
                            <List className="question-review-list-item">
                                <ListItem>
                                    <ListItemText className="question-review-item-no">Question {e.no}</ListItemText>
                                    <ListSubheader>
                                        <ResultIcon res={e.res}/>
                                    </ListSubheader>
                                </ListItem>

                                <ListItem>
                                    <ListItemText className="question-review-item-title">{e.ques.title}</ListItemText>                               
                                </ListItem>
                                
                                <ListItem>
                                    <QuestionOptsList opts={e.ques.nonSelectOpts??null} type="mul"/>
                                </ListItem>

                                <ListItem>
                                    <QuestionOptsList opts={e.ques.opts}></QuestionOptsList>
                                </ListItem>
                            </List>
                            
                            <List>

                                <ListItem>
                                    <TextField className="question-review-ans" label="Answer" variant="outlined" value={getAlpha(e.ques.correct)} disabled></TextField>
                                    <TextField className="question-review-ans" label="You Select" variant="outlined" value={getAlpha(e.select)} disabled></TextField>
                                </ListItem>
                           </List>
                            
                        </List>
                        
                    ))}
                </List>
            </div>
        </>
    )
}

export default QuestionReview;