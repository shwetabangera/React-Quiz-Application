import uniqid from "uniqid";
const questions = [
	{
		questionId: uniqid(),
		question: "What is 1+1?",
		options: [
			{
				value: "1",
				isCorrect: false,
			},
			{
				value: "2",
				isCorrect: true,
			},
			{
				value: "3",
				isCorrect: false,
			},
			{
				value: "4",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
	{
		questionId: uniqid(),
		question: "What is 2+3?",
		options: [
			{
				value: "4",
				isCorrect: false,
			},
			{
				value: "5",
				isCorrect: true,
			},
			{
				value: "6",
				isCorrect: false,
			},
			{
				value: "7",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
];
export default questions;
