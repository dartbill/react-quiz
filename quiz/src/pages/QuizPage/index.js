import React, { useEffect } from "react";
import { Quiz } from "../../components";

import { useDispatch, useSelector } from "react-redux";

import { GetQuestions } from "../../actions";

export const QuizPage = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    let level = useSelector((state) => state.level);
    let typeOfQ = useSelector((state) => state.typeOfQ);
    let playerCount = useSelector((state) => state.playerCount);


    useEffect(() => {
        dispatch(
            GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ, playerCount: playerCount })
        );
    }, [category, level, typeOfQ, playerCount, dispatch]);

    return <Quiz />;
};
