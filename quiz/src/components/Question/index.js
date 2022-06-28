import React from 'react'
import { Answer } from '../'
import { useSelector } from 'react-redux';


export const Question = () => {

  const q = useSelector(state => state.questions)

  let quest
  let correct
  let incorrect = []

  if (q.length !== 0) {
    console.log(q)
    quest = q[1].question
    incorrect = q[1].incorrect_answers
    correct = q[1].correct_answer
    console.log('this is quest' + incorrect + correct)
  }

  return (
    <div>

      <div className="question">{quest}</div>
      <div className="answers">
        <Answer answer={correct} />
        <Answer answer={incorrect[0]} />
        <Answer answer={incorrect[1]} />
        <Answer answer={incorrect[2]} />
      </div>

    </div>
  )
}

