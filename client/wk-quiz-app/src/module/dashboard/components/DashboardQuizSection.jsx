import TitleBar from '../../generic/components/TitleBar';
import QuizCard from '../../quiz/components/QuizCard';
import '../style/DashboardQuizSection.css'; 
import Quiz from '../../quiz/data/Quiz';

function DashboardQuizSection(props){
    return(
        <>
            <div className="dashboard-quiz-section">
                <TitleBar
                    title='Featured Quiz'
                    link=''
                />

                <div className="dashboard-quiz-container">
                    <QuizCard id={Quiz[0].id} title={Quiz[0].title} duration={Quiz[0].duration} imgUrl={Quiz[0].imgUrl}/>
                    <QuizCard id={Quiz[1].id} title={Quiz[1].title} duration={Quiz[1].duration} imgUrl={Quiz[1].imgUrl}/>
                    <QuizCard id={Quiz[2].id} title={Quiz[2].title} duration={Quiz[2].duration} imgUrl={Quiz[2].imgUrl}/>
                </div>
            </div>
        </>
    )
}

export default DashboardQuizSection;