import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.questions)

    const category = useSelector(state => state.category)
    let level = useSelector(state => state.level)
    let typeOfQ = useSelector(state => state.typeOfQ)

    useEffect(() => {
        dispatch(GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ }))
    }, [])

    console.log(data)

    return (
        <>
            <h1> Hello </h1>
            <SearchForm />
        </>
    )
}


export default Home
