import React, {createContext, useState} from 'react'

const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    
    const [completedQuestions, setCompletedQuestions] = useState([])
    const [currentQuest, setCurrentQuest] = useState(0)

    const handleCompleteQuest = (questDetails) => {
        setCompletedQuestions( (prev) => [...prev, questDetails ])
    }

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
    
    return(
        <QuizContext.Provider value={{ quizQuestions, completedQuestions, currentQuest, setCurrentQuest, handleCompleteQuest }} >
            {children}
        </QuizContext.Provider >
    )
}

export default QuizContext