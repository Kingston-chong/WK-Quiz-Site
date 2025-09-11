import '../style/SubSectionTitle.css'; 

function SubSectionTitle(props){
    return(
        <>  
            <div className='subsection-title-container'>
                <hr/>
                <h3>
                    {props.title}
                </h3>
            </div>
        </>
    )
}

export default SubSectionTitle;