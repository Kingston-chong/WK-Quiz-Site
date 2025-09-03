import Questions from "./Questions";
import q_1 from "../../../assets/quiz/q_1.png";
import q_2 from "../../../assets/quiz/q_2.png";
import q_3 from "../../../assets/quiz/q_3.png";

const Quiz = [
    {
        id:1,
        imgUrl:q_2,
        title:'Sample question WK QUIZ',
        desc:'This is sample of question for testing purpose',
        duration:15,
        passing:200,
        create_date: '24-08-2025',
        question:Questions[0]
    },
    {
        id:2,
        imgUrl:q_3,
        title:'Malaysia General Facts',
        desc:'This is sample of question for testing purpose',
        duration:20,
        passing:200,
        create_date: '24-08-2025',
        question:Questions[1]
    },
    {
        id:3, 
        imgUrl:q_1,
        title:'Quiz - Example Title',
        desc:'See How Much You Understand About Cosmetic',
        duration:40,
        passing:300,
        create_date: '31-08-2025',
        question:Questions[2]
    }
    
]

export default Quiz;