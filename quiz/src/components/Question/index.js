import React from 'react'
import { Answer } from '../'
import { useSelector } from 'react-redux';


export const Question = () => {

  const q = useSelector(state => state.questions)
  console.log(q)

  return (
    <div>

      <div className="question">{q[1].question}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>

    </div>
  )
}

