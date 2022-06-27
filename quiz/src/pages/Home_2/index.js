import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.questions)

    let category = 30

    useEffect(() => {
        dispatch(GetQuestions({ cat: category, level: "easy", type: "multiple" }))
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
