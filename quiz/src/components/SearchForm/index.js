import React from "react";


const SearchForm = ({ GetQuestions }) => {

    GetQuestions(20, "easy", "multiple")

    return (
        <p>hello from component </p>
    )

}

export default SearchForm
