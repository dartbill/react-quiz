import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Answer } from '../';

export const Question = ({ index, onSubmitQuestion }) => {
	// TOMS STUFF FOR BETTING///////////////////////////////////////////
	// const [orderA, setOrderA] = useState("0");
	// const [orderB, setOrderB] = useState("0");
	// const [orderC, setOrderC] = useState("0");
	// const [orderD, setOrderD] = useState("0");

	// function createRandOrder() {
	//     const rand1 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
	//     const rand2 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
	//     const rand3 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
	//     const rand4 = Math.floor(Math.random() * (4 - 0 + 1) + 0);
	//     setOrderA("bx" + rand1);
	//     setOrderB("bx" + rand2);
	//     setOrderC("bx" + rand3);
	//     setOrderD("bx" + rand4);
	// }
	// End of TOMS STUFF FOR BETTING///////////////////////////////////////////

	// question data
	const questions = useSelector((state) => state.questions);

	let question;
	let correctAnswer;
	let incorrectAnswers = [];
	let questionType;

	// Remove html chars from question text
	function stripHtml(html) {
		let tmp = document.createElement('DIV');
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || '';
	}

	if (questions.length !== 0) {
		question = stripHtml(questions[index].question);
		incorrectAnswers = questions[index].incorrect_answers.map((answer) =>
			stripHtml(answer)
		);
		correctAnswer = stripHtml(questions[index].correct_answer);
		questionType = questions[index].type;
	}

	// Randomize Order
	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;
		// While there remain elements to shuffle.
		while (currentIndex !== 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
		return array;
	}

	let answerArray;
	questionType === 'boolean'
		? (answerArray = shuffle([
				{ answer: correctAnswer, bool: true },
				{ answer: incorrectAnswers[0], bool: false },
		  ]))
		: (answerArray = shuffle([
				{ answer: correctAnswer, bool: true },
				{ answer: incorrectAnswers[0], bool: false },
				{ answer: incorrectAnswers[1], bool: false },
				{ answer: incorrectAnswers[2], bool: false },
		  ]));

	console.log(answerArray[0].bool);

	return (
		<>
			<div className='quiz'>
				<div className='question'>{question}</div>
				{questionType === 'boolean' ? (
					<div className='Container-Answers' >
						<div className='genBtn correctBtn bx3'>
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[0].bool}
								num='A'
								answer={answerArray[0].answer}
							/>
						</div>
						<div className='genBtn wrongBtn bx4'>
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[1].bool}
								num='B'
								answer={answerArray[1].answer}
							/>
						</div>
					</div>
				) : (
					<div className='Container-Answers' >
						<div className='genBtn correctBtn bx3'>
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[0].bool}
								num='A'
								answer={answerArray[0].answer}
							/>
						</div>
						<div className='genBtn wrongBtn bx4'>
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[1].bool}
								num='B'
								answer={answerArray[1].answer}
							/>
						</div>
						<div className='genBtn wrongBtn bx1' >
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[2].bool}
								num='C'
								answer={answerArray[2].answer}
							/>
						</div>
						<div className='genBtn wrongBtn bx2'>
							<Answer
								onSubmitQuestion={onSubmitQuestion}
								bool={answerArray[3].bool}
								num='D'
								answer={answerArray[3].answer}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
