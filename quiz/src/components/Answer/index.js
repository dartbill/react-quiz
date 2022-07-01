import React from "react";

export const Answer = ({ onSubmitQuestion, bool, answer, num }) => {

    // onClick calls function from Question 
    // passes in bool (true or false) in order to allow/disallow update score

    return (
        <div className="answer">
            <button
                onClick={() => onSubmitQuestion(bool)}
                className="answer-letter"
                style={{ cursor: "pointer" }}
            >
                {num}
            </button>
            <div className="answer-text"> <p data-testid="div">{answer}</p> </div>
        </div>
    );
};
