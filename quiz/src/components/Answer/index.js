import React from "react";

export const Answer = ({ nextQuestion }) => {
    return (
        <div className="answer">
            <button
                onClick={nextQuestion}
                className="answer-letter"
                style={{ cursor: "pointer" }}
            >
                {num}
            </button>
            <div className="answer-text"> {answer} </div>
        </div>
    );
};
