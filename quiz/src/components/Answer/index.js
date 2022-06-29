import React from "react";

export const Answer = ({ onNextQuestion,bool }) => {
    return (
        <div className="answer">
            <button
                onClick={() => onNextQuestion(bool)}
                className="answer-letter"
                style={{ cursor: "pointer" }}
            >
                {num}
            </button>
            <div className="answer-text"> {answer} </div>
        </div>
    );
};
