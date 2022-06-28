import React, { useEffect } from 'react'
import { Answer } from '../'
import { useSelector } from 'react-redux';


export const Question = () => {

  const q = useSelector(state => state.questions)
  let quest
  if (q.length != 0) {
    console.log(q)
    quest = q[1].question
    console.log('this is quest' + quest)
  }

  // {q[1].length = !0 ? q[1].question : 'no question yet'}

  return (
    <div>

      <div className="question">{quest}</div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>

    </div>
  )
}

