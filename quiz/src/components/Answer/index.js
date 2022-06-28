import React from 'react'

export const Answer = (props) => {

  return (
    <div className='answer'>
      <div className="answer-letter">A</div>
      <div className="answer-text"> {props.answer} </div>

    </div>

  )
}
