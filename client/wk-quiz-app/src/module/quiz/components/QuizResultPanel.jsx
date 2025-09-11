import '../style/QuizResultPanel.css';
import QuizResultIndicator from './QuizResultIndicator';

function QuizResultPanel(props){

    function getPassedMsg(isPassed){

        if(isPassed){
            return(
                <>
                    <h1 className='quiz-result-msg-pass'>Congrats !</h1>
                    <p>You Did well in the test</p>
                </>
            )
        }
        
        return (
            <>
                <h1 className='quiz-result-msg-fail'>Failed</h1>
                <p>Try Harder Next Time.</p>
            </>
        )
    }

    return(
        <>
            <div className='quiz-result-panel'>
                <div className='quiz-result-message'>
                    {getPassedMsg(props.pass)}        
                </div>
                
                <QuizResultIndicator accuracy = {props.accuracy}/>
            </div>
        </>
    )
}

export default QuizResultPanel;