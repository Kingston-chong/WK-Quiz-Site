import '../style/UserInfoList.css'

function UserInfoList(props){
    return(
        <>
            <div className="user-info-list-container">
                {props.icon}
                <div className='user-info-list-content'>
                 <h5>{props.value}</h5>
                 <p>{props.label}</p>
                </div>
            </div>
        </>
    )
}

export default UserInfoList;