import React, { useEffect } from "react";
import { Quiz } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { GetQuestions } from "../../actions";

export const QuizPage = () => {
    const dispatch = useDispatch();

    //get vars from store
    const category = useSelector((state) => state.category);
    let level = useSelector((state) => state.level);
    let typeOfQ = useSelector((state) => state.typeOfQ);
    let playerCount = useSelector((state) => state.playerCount);

    //render dispatch once on start and then if the store changes
    useEffect(() => {
        //dispatch function with user inputs
        dispatch(
            GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ, playerCount: playerCount })
        );
    }, [category, level, typeOfQ, playerCount, dispatch]);

    return <Quiz />;
};
