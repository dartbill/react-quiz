import React, { useState } from "react";
import { Answer } from "../";

export const Question = ({index,turn,onNextQuestion}) => {

  // TOMS STUFF FOR BETTING///////////////////////////////////////////
      const [orderA, setOrderA] = useState("0");
      const [orderB, setOrderB] = useState("");
      const [orderC, setOrderC] = useState("0");
      const [orderD, setOrderD] = useState("0");

      function createRandOrder() {
          const rand1 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          const rand2 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          const rand3 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          const rand4 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          setOrderA("bx" + rand1);
          setOrderB("bx" + rand2);
          setOrderC("bx" + rand3);
          setOrderD("bx" + rand4);
      }
  // End of TOMS STUFF FOR BETTING///////////////////////////////////////////

    // qustion data
    const questions = useSelector((state) => state.questions);

    let question;
    let correctAnswer;
    let incorrectAnswers = [];
    let questionType;

    if (questions.length !== 0) {
        question = questions[index].question;
        incorrectAnswers = questions[index].incorrect_answers;
        correctAnswer = questions[index].correct_answer;
        questionType = questions[index].type;
    }


    return (
        <>
            <div className="quiz">
                <div className="question">{question}</div>
                {questionType === "boolean" ? (
                    <div className="Container-Answers">
                        <div className="genBtn correctBtn bx3" id={orderA}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={true}
                                num="A"
                                answer={correctAnswer}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx4" id={orderB}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={false}
                                num="B"
                                answer={incorrectAnswers[0]}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="Container-Answers" onLoad={createRandOrder}>
                        <div className="genBtn correctBtn bx3" id={orderA}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={true}
                                num="A"
                                answer={correctAnswer}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx4" id={orderB}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={false}
                                num="B"
                                answer={incorrectAnswers[0]}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx1" id={orderC}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={false}
                                num="C"
                                answer={incorrectAnswers[1]}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx2" id={orderD}>
                            <Answer
                                onNextQuestion={onNextQuestion}
                                turn={turn}
                                bool={false}
                                num="D"
                                answer={incorrectAnswers[2]}
                            />
                        </div>
                    </div>
                )}
                <button onClick={createRandOrder}>Randomise!</button>
            </div>
        </>
    );
};
