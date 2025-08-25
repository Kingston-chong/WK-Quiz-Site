import TitleBar from '../../generic/components/TitleBar';
import QuizCard from '../../quiz/components/QuizCard';
import '../style/DashboardQuizSection.css'; 

function DashboardQuizSection(props){
    return(
        <>
            <div className="dashboard-quiz-section">
                <TitleBar
                    title='Featured Quiz'
                    link=''
                />

                <div className="dashboard-quiz-container">
                    <QuizCard id={1} title='Quiz 1' duration='1'/>
                    <QuizCard id={2} title='Quiz 1' duration='1'/>
                    <QuizCard id={3} title='Quiz 1' duration='1'/>
                </div>
            </div>
        </>
    )
}

export default DashboardQuizSection;