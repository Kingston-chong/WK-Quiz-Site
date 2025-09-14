import TitleBar from '../../generic/components/TitleBar';
import QuizCard from '../../quiz/components/QuizCard';
import '../style/DashboardQuizSection.css'; 
import Quiz from '../../quiz/data/Quiz';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardQuizSection(){

    const api_url = import.meta.env.VITE_API_URL;
    const [quizData,setQuizData] = useState(null);

    useEffect(()=>{
        axios.get(api_url+"/quiz/")
        .then(resp=>{
            setQuizData(resp.data.quizData)
        });
    })

    if(quizData){
        return(
            <>
                <div className="dashboard-quiz-section">
                    <TitleBar
                        title='Featured Quiz'
                        link=''
                    />
    
                    <div className="dashboard-quiz-container">
                        {quizData.map((e,index)=>{
                            if(index<=2){
                                return <QuizCard id={e._id} title={e.title} duration={e.duration} imgUrl={e.imgUrl}/>
                            }
                        })}
                    </div>
                </div>
            </>
        )
    }
    
}

export default DashboardQuizSection;