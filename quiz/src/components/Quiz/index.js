import React, { useReducer } from "react";
import { Question } from "../Question";


const initialState = {
  currentQuestionIndex: 0,

};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};


export const Quiz = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state", state);

 
  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question question={state.currentQuestionIndex} />
        <br />
        <div
          className="next-button"
          onClick={() => {
            dispatch({ type: "NEXT_QUESTION" })}}
        >
          Next question
        </div>
      </div>
    </div>
  );
};


