//Mock data API page

const data = [
  {
    question: "What was the number 1 draftpick in the 2003 NBA draft",
    answerOptions: 
    [
        { answerText: "Lebron James", isCorrect: true },
        { answerText: "Dwayne Wade", isCorrect: false },
        { answerText: "Chris Bosh", isCorrect: false },
        { answerText: "Carmelo Anthony", isCorrect: true }
    ],
        
},

  {
    question: "What player has the highest career 3-pt FG percentage?",
    answerOptions: ["Mike Miller", "Reggie Miller", "Steph Curry"],
    correctAnswer: "Steve Kerr",
  },
  {
    question: "Who is the shortest NBA player of all time?",
    answerOptions: ["isiah thomas", "Nate Robinson", "Allen Iverson"],
    correctAnswer: "Mugsey Bogues",
  },
  {
    question: "What is the record for the most assists in a game?",
    answerOptions: ["35", "25", "29"],
    correctAnswer: "30",
  },
  {
    question: "What team has the best record in one season?",
    answerOptions: [
      { answerText: "Chicago Bulls", isCorrect: false },
      { answerText: "LA Lakers", isCorrect: false },
      { answerText: "Boston Celtics", isCorrect: false },
      { answerText: "Golden State Warriors", isCorrect: true },
    ],
  },
  {
    question: "Who holds the records for most dunks in the NBA?",
    answerOptions: [
      { answerText: "Shaquille Oneil", isCorrect: false },
      { answerText: "Russel Westbrook", isCorrect: false },
      { answerText: "Lebron James", isCorrect: false },
      { answerText: "Dwight Howard", isCorrect: true },
    ],
  },
  {
    question: "Kyrie Irving was born in which country?",
    answerOptions: [
        { answerText: "USA", isCorrect: false },
        { answerText: "Canada", isCorrect: false },
        { answerText: "UK", isCorrect: false },
        { answerText: "Austailia", isCorrect: true }
    ],
        
        
 
  },
  {
    question: "Which NBA team has won the most championships",
    answerOptions: ["Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
    correctAnswer: "LA Lakers",
  },
];

export default data;
