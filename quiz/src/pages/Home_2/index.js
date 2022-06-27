import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.questions)

    let category = 30
    let level = 'easy'
    let typeOfQ = 'multiple'

    useEffect(() => {
        dispatch(GetQuestions({ cat: category, level: level, type: typeOfQ }))
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
