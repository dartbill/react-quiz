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


  //need to go to the next question when an answer is chosen

  return (
    <div>

      <div className="question">{quest}</div>
      <div className="answers">
        <Answer num="A" answer={correct} />
        <Answer num="B" answer={incorrect[0]} />
        <Answer num="C" answer={incorrect[1]} />
        <Answer num="D" answer={incorrect[2]} />
      </div>

    </div>
  )
}

