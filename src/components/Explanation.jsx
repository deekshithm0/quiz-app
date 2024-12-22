import React from 'react'

const Explanation = ({ question }) => {
  return (
    <div className='w-full h-full flex flex-col p-5 rounded-md border shadow-md'>
      <h3 className='font-bold'>Explanation</h3>
      <p className='p-4'>{question.explanation}</p>
    </div>
  );
};

export default Explanation