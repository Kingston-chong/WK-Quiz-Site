import {Link} from "react-router-dom";
import '../style/TitleBar.css'

function TitleBar(props){
    return (
        <>
            <div className="title-bar">
                <h1>{props.title}</h1>
                <Link to={props.link}>View All</Link>
            </div>
        </>
    )
}

export default TitleBar;