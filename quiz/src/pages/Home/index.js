import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


export const Home = () => {

    // const dispatch = useDispatch();
    // const data = useSelector(state => state.questions)
    // console.log(data)

    // const category = useSelector(state => state.category)
    // let level = useSelector(state => state.level)
    // let typeOfQ = useSelector(state => state.typeOfQ)

    // useEffect(() => {
    //     dispatch(GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ }))
    //     // console.log(data)
    // }, [category, level, typeOfQ])


    return (
        <>
            <SearchForm />
        </>
    )
}



