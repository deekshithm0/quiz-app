import React, { useContext } from 'react'
import QuizContext from '../contexts/QuizContext'

const Test = () => {
  const { quizQuestions, completedQuestions, currentQuest } =
    useContext(QuizContext)
    console.log();
    const completed = completedQuestions.length
    const total = quizQuestions.length

  return (
    <div className='w-[25%] h-full m-4 rounded-md border shadow-md '>
      <div className='w-full h-[3rem] flex flex-row justify-between px-4 items-center '>
        <p className='font-bold'>Question {completed}/{total}</p>
        <p className='font-bold'>Need Help ?</p>
      </div>
      <div className='w-full h-auto grid grid-cols-5 gap-4 p-4 pt-10 '>
        {quizQuestions.map((_, index) => {
          const isCompleted = completedQuestions.some(
            q => q.question === quizQuestions[index].question
          )
          return (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                index === currentQuest
                  ? 'bg-red-500'
                  : isCompleted
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }  `}
            >
              {' '}
              {index + 1}{' '}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Test
