import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './module/dashboard/screen/dashboard';
import Layout from './module/generic/screen/layout';
import QuizDetails from './module/quiz/screen/QuizDetails';
import InQuiz from './module/quiz/screen/InQuiz';
import QuizLayout from './module/quiz/screen/QuizLayout';
import QuizResult from './module/quiz/screen/QuizResult';
import QuizMain from './module/quiz/screen/QuizMain';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index path='dashboard' element={<Dashboard/>}/>
            <Route path='QuizDetails/:id' element={<QuizDetails/>}/>
            <Route path='Result/:id' element={<QuizResult/>}/>
            <Route path='Quiz' element={<QuizMain/>}/>
          </Route>

          <Route path='/quiz' element={<QuizLayout/>}>
            <Route index path='InQuiz/:id' element={<InQuiz/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
