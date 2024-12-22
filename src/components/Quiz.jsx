import React from 'react'
import Question from './Question'
import Explanation from './Explanation'

const Quiz = () => {
  return (
    <div className='w-[75%] h-full bg-yellow-500 flex flex-col items-center '>
        <Question />
        {/* <Explanation /> */}
    </div>
  )
}

export default Quiz