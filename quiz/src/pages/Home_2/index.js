import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";

import { GetQuestions } from "../../actions";


const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.questions)
    let [search, setSearchResult] = useState()


    useEffect(() => {

        setSearchResult(() => (searchTerm) => {

            dispatch(GetQuestions(searchTerm))

        })
        console.log(search)
        console.log('i have been run')

    }, [])

    // console.log(data)
    console.log(search)

    return (
        <>
            <h1> Hello </h1>
            {/* <SearchForm GetQuestions={search} /> */}
        </>
    )
}


export default Home
