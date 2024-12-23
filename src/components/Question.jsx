import React, { useContext, useState } from 'react'
import Explanation from './Explanation'
import QuizContext from '../contexts/QuizContext'

const Question = () => {
  

  const {
    quizQuestions,
    completedQuestions,
    currentQuest,
    setCurrentQuest,
    handleCompleteQuest
  } = useContext(QuizContext)

  //   const [currentQuest, setCurrentQuest] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const nextQuest = () => {
    if (currentQuest < quizQuestions.length - 1) {
      if (selectedOption) {
        handleCompleteQuest({
          question: quizQuestions[currentQuest].question,
          selectedOption,
          correctAnswer: quizQuestions[currentQuest].correctAnswer
        })
      }
      setCurrentQuest(currentQuest + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    }
  }
  const prevQuest = () => {
    if (currentQuest > 0) {
      setCurrentQuest(currentQuest - 1)
      setSelectedOption(null)
      setShowExplanation(false)
    }
  }

  return (
    <div className='w-full h-full bg-slate-50 flex flex-col gap-4'>
      <div className=' w-full h-auto p-5 flex flex-col gap-2 rounded-md border border-blue-500 m-2 shadow-md '>
        <p className='font-bold'>Question {currentQuest + 1}</p>
        <p>{quizQuestions[currentQuest].question}</p>
      </div>
      <div className='w-full h-full bg-slate-50 flex flex-col gap-4 pt-2'>
        {quizQuestions[currentQuest].options.map((option, index) => {
          let isCorrect = false
          if (option === quizQuestions[currentQuest].correctAnswer) {
            isCorrect = true
          }
          return (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`w-full flex flex-col p-4 pl-8 mx-2 rounded-md shadow-md border hover:border-blue-500 ${
                showExplanation
                  ? selectedOption === option
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : ''
                  : selectedOption === option
                  ? 'bg-blue-400 text-white'
                  : 'null'
              } `}
            >
              {option}
            </button>
          )
        })}
      </div>
      <div className='flex gap-7 items-center justify-center p-2 '>
        <button
          className='btn shadow-md'
          onClick={prevQuest}
          disabled={currentQuest === 0}
        >
          Prev
        </button>
        <button
          className='btn shadow-md'
          onClick={nextQuest}
          disabled={currentQuest === quizQuestions.length - 1}
        >
          Next
        </button>
      </div>
      <div className='w-full flex justify-center'>
        <button
          className='btn-2 shadow-md'
          onClick={() => setShowExplanation(!showExplanation)}
        >
          {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
        </button>
      </div>
      <div className='w-full h-full m-2 '>
        {showExplanation && (
          <Explanation question={quizQuestions[currentQuest]} />
        )}
      </div>
    </div>
  )
}

export default Question
