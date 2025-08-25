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
                    text='12-01-2025'
                    icon ={<CalendarMonthIcon/>}
                />

                <QuizInfoListItem 
                    text='15 Mins'
                    icon ={<TimerIcon/>}
                />

                <QuizInfoListItem 
                    text='0 Times'
                    icon ={<ReplayIcon/>}
                />

                <QuizInfoListItem 
                    text='100 Pts'
                    icon ={<TrackChangesIcon/>}
                />
            </List>
        </>
    )
}

export default QuizInfoList;