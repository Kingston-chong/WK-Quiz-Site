import { List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import '../style/QuizInfoList.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';
import ReplayIcon from '@mui/icons-material/Replay';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

function QuizInfoListItem(props){
    return(
        <>
            <ListItem className='quiz-info-list-item'>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText
                    primary={props.text}
                />
            </ListItem>
        </>
    )
}

function QuizInfoList(props){
    return(
        <>
            <List className='quiz-info-list'>
                <QuizInfoListItem 
                    text={props.createDate}
                    icon ={<CalendarMonthIcon/>}
                />

                <QuizInfoListItem 
                    text={`${props.duration} mins`}
                    icon ={<TimerIcon/>}
                />

                <QuizInfoListItem 
                    text={`${props.attempt} Times`}
                    icon ={<ReplayIcon/>}
                />

                <QuizInfoListItem 
                    text={`${props.passing} Pts`}
                    icon ={<TrackChangesIcon/>}
                />
            </List>
        </>
    )
}

export default QuizInfoList;