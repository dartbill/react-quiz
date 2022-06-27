import React from "react";
import { useDispatch } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {


    const dispatch = useDispatch();


    const searchResult = searchTerm => dispatch(GetQuestions(searchTerm));


    return (
        <>
            <h1 >GitHub Search</h1>
            <SearchForm GetQuestions={searchResult} />
        </>
    )
}


export default Home
