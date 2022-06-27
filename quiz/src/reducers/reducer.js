
const initialState = {
    questions: []
    // results: {
    //     category: "",
    //     type: "",
    //     difficulty: "",
    //     question: "",
    //     correct_answer: "",
    //     incorrect_answers: []
    // },
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "QUESTIONS":
            return {
                ...state, results: {
                    ...state.results,
                    ...action.payload
                }
            }
        case "TEST":
            return {
                ...state,
                questions: action.payload
            }

        default:
            return initialState
    }

}


export default reducer
