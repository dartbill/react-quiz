import React, { useEffect } from "react";


const SearchForm = ({ GetQuestions }) => {


    GetQuestions({ cat: 20, level: "easy", type: "multiple" })

    return (
        <p>hello from component </p>
    )

}

export default SearchForm
