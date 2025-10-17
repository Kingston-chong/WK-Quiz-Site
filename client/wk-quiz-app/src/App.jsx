import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './module/dashboard/screen/dashboard';
import Layout from './module/generic/screen/Layout';
import QuizDetails from './module/quiz/screen/QuizDetails';
import InQuiz from './module/quiz/screen/InQuiz';
import QuizLayout from './module/quiz/screen/QuizLayout';
import QuizResult from './module/quiz/screen/QuizResult';
import QuizMain from './module/quiz/screen/QuizMain';
import AuthLayout from './module/auth/screen/AuthLayout';
import Login from './module/auth/screen/Login';
import Register from './module/auth/screen/Register';
import QuestionReview from './module/quiz/screen/QuestionReview';
import { useState } from 'react';

function App() {

  const [auth,setAuth] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/auth' element={<AuthLayout/>}>
            <Route element={<Login setAuth={setAuth}/>} path='login'/>
            <Route element={<Register/>} path='register'/>
          </Route>

          <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='QuizDetails/:id' element={<QuizDetails/>}/>
            <Route path='Result/:id' element={<QuizResult/>}/>
            <Route path='QuestionReview/:id' element={<QuestionReview/>}/>
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
