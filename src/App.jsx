import './App.css'
import Quiz from './components/Quiz'
import Test from './components/Test'

function App () {
  return (
    <>
      <div className='w-screen h-screen flex flex-col items-center'>
        <h2 className='w-full h-[3rem] flex items-center justify-center text-2xl'>Quiz Title</h2>
        <div className='w-full h-full flex flex-row items-center justify-center gap-2'>
          <Quiz />
          <Test />
        </div>
      </div>
    </>
  )
}

export default App
