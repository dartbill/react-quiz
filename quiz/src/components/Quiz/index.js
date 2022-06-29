import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Question } from "../Question";
import "../.././index.css";


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
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [turn, setTurn] = useState(true);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const submitAnswer = (bool) => {

        // Updates Score if answer was correct
        if (bool){updateScore()}

        // Updates Question to Next Question OR ends game
        state.currentQuestionIndex < 19
            ? dispatch({ type: "NEXT_QUESTION" })
            : routeChange("/final");

        // Updates Turn, alternating between player 1 & 2 with boolean
        updateTurn();
    };

    const updateScore = () => {
        if (turn) {
            setScore1((score1 + 1));
            dispatch({
                type: "SET_PLAYER1",
                payload: {
                    score: score1,
                },
            });
        } else {
            setScore2((score2 + 1));
            dispatch({
                type: "SET_PLAYER2",
                payload: {
                    score: score2,
                },
            });
        }
        console.log("score1:",score1)
        console.log("score2:",score2)
    };

    const updateTurn = () => turn ? setTurn(false) : setTurn(true);

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    {`Question ${state.currentQuestionIndex + 1}/10`}
                </div>
                <Question
                    index={state.currentQuestionIndex}
                    onSubmitQuestion={submitAnswer}
                />
                <br />
            </div>
        </div>
    );
};
