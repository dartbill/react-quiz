import React, { useState } from "react";
import { Answer } from "../";

export const Question = ({questionType,turn,question,nextQuestion}) => {

  // TOMS STUFF FOR BETTING///////////////////////////////////////////
      const [orderA, setOrderA] = useState("0");
      const [orderB, setOrderB] = useState("");
      const [orderC, setOrderC] = useState("0");
      const [orderD, setOrderD] = useState("0");

      function createRandOrder() {
          const rand1 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          setOrderA("bx" + rand1);
          const rand2 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          setOrderB("bx" + rand2);
          const rand3 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          setOrderC("bx" + rand3);
          const rand4 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          setOrderD("bx" + rand4);
      }
  // End of TOMS STUFF FOR BETTING///////////////////////////////////////////

    return (
        <>
            <div className="quiz">
                <div className="question">{quest}</div>
                {questionType === "boolean" ? (
                    <div className="Container-Answers">
                        <div className="genBtn correctBtn bx3" id={orderA}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={true}
                                num="A"
                                answer={correct}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx4" id={orderB}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={false}
                                num="B"
                                answer={incorrect[0]}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="Container-Answers" onLoad={createRandOrder}>
                        <div className="genBtn correctBtn bx3" id={orderA}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={true}
                                num="A"
                                answer={correct}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx4" id={orderB}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={false}
                                num="B"
                                answer={incorrect[0]}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx1" id={orderC}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={false}
                                num="C"
                                answer={incorrect[1]}
                            />
                        </div>
                        <div className="genBtn wrongBtn bx2" id={orderD}>
                            <Answer
                                question={question}
                                onClick={nextQuestion}
                                turn={turn}
                                bool={false}
                                num="D"
                                answer={incorrect[2]}
                            />
                        </div>
                    </div>
                )}
                <button onClick={createRandOrder}>Randomise!</button>
            </div>
        </>
    );
};
