import React from 'react'

export const Answer = (props) => {

  return (
    <div className='answer'>
      <div className="answer-letter">{props.num}</div>
      <div className="answer-text"> {props.answer} </div>

    </div>

  )
}
