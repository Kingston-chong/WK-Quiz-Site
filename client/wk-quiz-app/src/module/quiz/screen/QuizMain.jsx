import QuizCard from "../components/QuizCard";
import Quiz from "../data/Quiz";
import '../style/QuizMain.css';

function QuizMain(){
    return(
        <>
            <div className="quiz-main-page">
                <h1 className="title-standard">All Quiz</h1>

                <div className="quiz-list-container">
                    {  
                        Quiz.map((e,index)=>(
                            <QuizCard 
                                title = {e.title}
                                duration = {e.duration}
                                id = {e.id}
                                imgUrl = {e.imgUrl}
                                index = {index}
                            />
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default QuizMain;