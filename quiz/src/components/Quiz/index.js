import React, { useReducer, useState } from "react";
import { Question } from "../Question";
import "../.././index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

    let [score1, setScore1] = useState(0);
    let [score2, setScore2] = useState(0);
    const player1 = useSelector((state) => state.player1);
    const player2 = useSelector((state) => state.player1);

    const nextQuestion = (e) => {
        // Updates Score
        updateScore();

        // Updates Question to Next Question
        state.currentQuestionIndex < 19
            ? dispatch({ type: "NEXT_QUESTION" })
            : routeChange("/final");
        // Updates Turn
        updateTurn(e);
    };

    const updateScore = (e) => {
        e.preventDefault();
        if (turn) {
            setScore1((score1 = score1 + 1));
            dispatch({
                type: "SET_PLAYER1",
                payload: {
                    score: score1,
                },
            });
        } else {
            setScore2((score2 = score2 + 1));
            dispatch({
                type: "SET_PLAYER2",
                payload: {
                    score: score2,
                },
            });
        }
        console.log("this is score2 " + score2);
        console.log("this is player2 " + player2.score);
    };

    const updateTurn = (e) => {
        e.preventDefault(e);
        if (turn) {
            setTurn(false);
        } else {
            setTurn(true);
        }
    };

    return (
        <div className="quiz">
            <div>
                <div className="score">
                    {`Question ${state.currentQuestionIndex + 1}/10`}
                </div>
                <Question
                    index={state.currentQuestionIndex}
                    turn={turn}
                    onNextQuestion={nextQuestion}
                />
                <br />
            </div>
        </div>
    );
};
