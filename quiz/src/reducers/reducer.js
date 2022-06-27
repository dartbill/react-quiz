
const initialState = {
    category: 9,
    level: '',
    typeOfQ: "",
    questions: []

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case "SETCAT":
            return {
                ...state, category: action.payload
            }
        case "SETLEVEL":
            return {
                ...state, level: action.payload
            }
        case "SETTYPE":
            return {
                ...state, typeOfQ: action.payload
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
