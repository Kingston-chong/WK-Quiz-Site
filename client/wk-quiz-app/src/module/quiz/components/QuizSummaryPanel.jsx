import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import '../style/QuizSummaryPanel.css';
import SubSectionTitle from '../../generic/components/SubSectionTitle';

function QuizSummaryPanel(props){
    return(
        <>  
            <div className='quiz-summary-panel-container'>
                
                <SubSectionTitle title="Quiz Summary"></SubSectionTitle>
                
                <List className="quiz-summary-panel">

                    <ListItem className='quiz-summary-panel-item'>
                        <ListItemIcon>
                            <AccessTimeFilledIcon htmlColor='indigo'/>
                        </ListItemIcon>
                        <ListItemText>Time Used</ListItemText>
                        <ListSubheader>{props.timeUsed}</ListSubheader>
                    </ListItem>

                    <ListItem className='quiz-summary-panel-item'>
                        <ListItemIcon>
                            <StarsIcon htmlColor='goldenrod'/>
                        </ListItemIcon>
                        <ListItemText>Score</ListItemText>
                        <ListSubheader>{props.score} pts</ListSubheader>
                    </ListItem>

                    <ListItem className='quiz-summary-panel-item'>
                        <ListItemIcon>
                            <CheckCircleIcon color='success'/>
                        </ListItemIcon>
                        <ListItemText>Correct</ListItemText>
                        <ListSubheader>{props.correct}</ListSubheader>
                    </ListItem>

                    <ListItem className='quiz-summary-panel-item'>
                        <ListItemIcon>
                            <DangerousIcon color='error'/>
                        </ListItemIcon>
                        <ListItemText>Wrong</ListItemText>
                        <ListSubheader>{props.wrong}</ListSubheader>
                    </ListItem>
                </List>
            </div>
            
        </>
    )
};

export default QuizSummaryPanel; 