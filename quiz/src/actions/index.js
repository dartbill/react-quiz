import axios from 'axios';


// export const GetResult = ({ category, level, type }) => {

//     const loadResult = (username) => ({
//         type: 'USERNAME',
//         payload: username
//     });

//     return async dispatch => {
//         try {
//             let opts = { headers: { 'Accept': 'application/json' } }
//             let { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=${type}`, opts)
//             dispatch(loadResult({ data }))
//         } catch (err) {
//             console.warn(err.message);
//         };
//     };
// };





export const GetQuestions = ({ cat, level, Qtype }) => {

    const loadResult = ({ category, type, difficulty, question, correct_answer, incorrect_answers }) => ({
        type: 'QUESTIONS',
        payload: { category: category, type: type, difficulty: difficulty, question: question, correct_answer: correct_answer, incorrect_answers: incorrect_answers }
    });
    return async dispatch => {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${level}&type=${Qtype}`, opts)
            console.log(data)
            const something = { category: category, type: type, difficulty: difficulty, question: question, correct_answer: correct_answer, incorrect_answers: incorrect_answers }
            dispatch(loadResult(something))
        } catch (err) {
            console.warn(err.message);
        };
    };
};






