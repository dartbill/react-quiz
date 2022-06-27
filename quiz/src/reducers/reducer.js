
const initialState = {
    quiz: {
        category: "",
        type: "",
        difficulty: "",
        question: "",
        correct_answer: "",
        incorrect_answers: []
    }
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "QUESTIONS":
            return {
                ...state, quiz: {
                    ...state.quiz,
                    ...action.payload
                }
            }
        default:
            return initialState
    }

}


export default reducer
