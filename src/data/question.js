import uniqid from "uniqid";
const question = [
	{
		questionId: uniqid(),
		question: "What is full form of CPU?",
		options: [
			{
				value: "Control Processor Unit",
				isCorrect: false,
			},
			{
				value: "Central Processing Unit",
				isCorrect: true,
			},
			{
				value: "Computer Program Unit",
				isCorrect: false,
			},
			{
				value: "Central Processor Unit",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
	{
		questionId: uniqid(),
		question: "What is full form of css?",
		options: [
			{
				value: "Cascading stylesheet",
				isCorrect: false,
			},
			{
				value: "Creative Stylesheet",
				isCorrect: true,
			},
			{
				value: "Colorful Style sheets",
				isCorrect: false,
			},
			{
				value: "Computer Style Sheets",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
];
export default question;
