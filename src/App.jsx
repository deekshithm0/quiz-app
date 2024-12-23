import './App.css'
import Question from './components/Question'
import Test from './components/Test'
import { QuizProvider } from './contexts/QuizContext'

function App () {
  return (
    <QuizProvider >
      <div className='w-screen h-screen flex flex-col items-center'>
        <h2 className='w-full h-[3rem] flex items-center justify-center text-2xl font-bold'>Quiz Title</h2>
        <div className='w-full h-full flex flex-row items-center justify-center gap-2 mb-4'>
          <Question />
          <Test />
        </div>
      </div>
    </QuizProvider>
  )
}

export default App
