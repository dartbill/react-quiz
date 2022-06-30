import axios from "axios";

// Damn cats!

export const GetQuestions = (cat) => {
  const category = cat.cat;
  const lev = cat.level;
  const type = cat.typeOfQ;

  //fetch questions functions
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?&amount=20&category=${category}&difficulty=${lev}&type=${type}`
      );
      let resultsData = data.results;

      dispatch({
        type: "TEST",
        payload: shuffleArray(resultsData),
      });
    } catch (err) {
    }
  };
};

//returns random question 
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

