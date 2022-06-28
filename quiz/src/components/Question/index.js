import React from 'react'
import { Answer } from '../'
import { useSelector } from 'react-redux';


export const Question = (props) => {

  const q = useSelector(state => state.questions) //(

  let quest
  let correct
  let incorrect = []

  if (q.length !== 0) {
    console.log(q)
    quest = q[props.question].question
    incorrect = q[props.question].incorrect_answers
    correct = q[props.question].correct_answer
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

