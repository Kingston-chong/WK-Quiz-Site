import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import '../style/QuizResultPanel.css';

function QuizResultPanel(props){
    return(
        <>
            <List className="quiz-result-panel">

                <ListItem className='quiz-result-panel-item'>
                    <ListItemIcon>
                        <AccessTimeFilledIcon htmlColor='indigo'/>
                    </ListItemIcon>
                    <ListItemText>Time Used</ListItemText>
                    <ListSubheader>{props.timeUsed}</ListSubheader>
                </ListItem>

                <ListItem className='quiz-result-panel-item'>
                    <ListItemIcon>
                        <StarsIcon htmlColor='goldenrod'/>
                    </ListItemIcon>
                    <ListItemText>Score</ListItemText>
                    <ListSubheader>{props.score} pts</ListSubheader>
                </ListItem>

                <ListItem className='quiz-result-panel-item'>
                    <ListItemIcon>
                        <CheckCircleIcon color='success'/>
                    </ListItemIcon>
                    <ListItemText>Correct</ListItemText>
                    <ListSubheader>{props.correct}</ListSubheader>
                </ListItem>

                <ListItem className='quiz-result-panel-item'>
                    <ListItemIcon>
                        <DangerousIcon color='error'/>
                    </ListItemIcon>
                    <ListItemText>Wrong</ListItemText>
                    <ListSubheader>{props.wrong}</ListSubheader>
                </ListItem>
            </List>
        </>
    )
};

export default QuizResultPanel; 