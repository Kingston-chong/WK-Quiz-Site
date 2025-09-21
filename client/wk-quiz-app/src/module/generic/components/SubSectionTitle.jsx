import { Button } from '@mui/material';
import '../style/SubSectionTitle.css'; 

function SubSectionTitle(props){
    return(
        <>  
            <div className='subsection-title-container'>
                <hr/>
                <h3>
                    {props.title}
                </h3>
                <Button className="subsection-title-btn" href={`${props.url}`} variant='contained'>{props.action}</Button>
            </div>
        </>
    )
}

export default SubSectionTitle;