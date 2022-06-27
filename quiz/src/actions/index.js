import axios from 'axios';


export const GetQuestions = ({ cat, level, Qtype }) => {

    const loadResult = ({ category, type, difficulty, question, correct_answer, incorrect_answers }) => ({
        type: 'QUESTIONS',
        payload: { category: category, type: type, difficulty: difficulty, question: question, correct_answer: correct_answer, incorrect_answers: incorrect_answers }
    });

    return async dispatch => {
        try {
            let opts = { headers: { 'Accept': 'application/json' } }
            let { data } = await axios.get(`https://opentdb.com/api.php?&amount=6&category=17&difficulty=hard`, opts)
            console.log(data)
            const something = { category: data.category, type: data.type, difficulty: data.difficulty, question: data.question, correct_answer: data.correct_answer, incorrect_answers: data.incorrect_answers }

            dispatch(loadResult(something))
        } catch (err) {
            console.warn(err.message);
        };
    };
};






