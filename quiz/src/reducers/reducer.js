
const initialState = {
    category: 9,
    level: '',
    typeOfQ: '',
    playerCount: 0,
    questions: [],
    player1: {
        username: "player1",
        score: 0
    },
    player2: {
        username: "player2",
        score: 0
    }
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
        case "SET_PLAYER_COUNT":
            return {
                ...state,
                playerCount: action.payload
            }
        case "SET_PLAYER1":
            return {
                ...state, player1: {
                    ...state.player1,
                    ...action.payload
                }
            }
        case "SET_PLAYER2":
            return {
                ...state, player2: {
                    ...state.player2,
                    ...action.payload
                }
            }

        default:
            return initialState
    }

}

export default reducer
