import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {

    const dispatch = useDispatch();

    let searchResult = searchTerm => { }

    const data = useSelector(state => state.questions)

    console.log(data)

    useEffect(() => {
        if (data.length != 0) {
            console.log(data)
            searchResult = searchTerm => { dispatch(GetQuestions(searchTerm)) }; //call once
            console.log(searchResult)
        }
    }, [])
    // const searchResult = searchTerm => { dispatch(GetQuestions(searchTerm)) };
    // console.log(searchResult)
    return (
        <>
            <h1> Hello </h1>
            <SearchForm GetQuestions={searchResult} />
        </>
    )
}


export default Home
