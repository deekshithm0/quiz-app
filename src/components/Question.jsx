import React, { useState } from 'react'
import Explanation from './Explanation'

const Question = () => {
  const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
      correctAnswer: 'Paris',
      explanation:
        'Paris is the capital city of France and is known for its art, fashion, and culture.'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      explanation:
        'Mars is often called the Red Planet because of its reddish appearance, which is due to iron oxide (rust) on its surface.'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
      correctAnswer: 'Blue Whale',
      explanation:
        'The blue whale is the largest mammal and can grow up to 100 feet long and weigh as much as 200 tons.'
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        'Charles Dickens',
        'Mark Twain',
        'William Shakespeare',
        'Jane Austen'
      ],
      correctAnswer: 'William Shakespeare',
      explanation:
        "'Romeo and Juliet' is a famous tragedy written by William Shakespeare, exploring themes of love and fate."
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pb', 'Fe'],
      correctAnswer: 'Au',
      explanation:
        "The chemical symbol for gold is 'Au', derived from the Latin word 'aurum'."
    },
    {
      question:
        'Which gas do plants absorb from the atmosphere during photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
      explanation:
        'Plants absorb carbon dioxide from the atmosphere during photosynthesis to produce glucose and oxygen.'
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
      correctAnswer: 'Mitochondria',
      explanation:
        'Mitochondria are known as the powerhouse of the cell because they produce energy in the form of ATP through cellular respiration.'
    },
    {
      question: 'Which element has the highest atomic number?',
      options: ['Oganesson', 'Einsteinium', 'Uranium', 'Plutonium'],
      correctAnswer: 'Oganesson',
      explanation:
        'Oganesson (Og) has the highest atomic number of all elements, with an atomic number of 118.'
    },
    {
      question: 'In which year did World War II end?',
      options: ['1945', '1939', '1941', '1950'],
      correctAnswer: '1945',
      explanation:
        'World War II ended in 1945 with the unconditional surrender of Germany in May and Japan in September.'
    },
    {
      question: 'What is the main language spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'English', 'French'],
      correctAnswer: 'Portuguese',
      explanation:
        'Portuguese is the official language of Brazil, a legacy of Portuguese colonization in the 16th century.'
    }
  ]
  const [currentQuest, setCurrentQuest] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const nextQuest = () => {
    if (currentQuest < quizQuestions.length - 1) {
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
