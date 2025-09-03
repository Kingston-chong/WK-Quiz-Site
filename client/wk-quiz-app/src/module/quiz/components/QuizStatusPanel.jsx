import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import StarsIcon from '@mui/icons-material/Stars';
import '../style/QuizStatusPanel.css';

function QuizStatusPanel(props){

    return(
        <>
            <List className="quiz-status-panel">
                <ListItem>
                    <ListItemIcon>
                        <StarsIcon color="warning"/>
                    </ListItemIcon>
                    <ListItemText>{props.score}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <CheckCircleIcon color="success"/>
                    </ListItemIcon>
                    <ListItemText>{props.correct}</ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <DangerousIcon color="error"/>
                    </ListItemIcon>
                    <ListItemText>{props.wrong}</ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default QuizStatusPanel;