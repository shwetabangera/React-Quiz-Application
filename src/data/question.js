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
	{
		questionId: uniqid(),
		question: "Which of the following is an interface?",
		options: [
			{
				value: "Thread",
				isCorrect: true,
			},
			{
				value: "Runnable",
				isCorrect: false,
			},
			{
				value: "Date",
				isCorrect: false,
			},
			{
				value: "Calendar",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
	{
		questionId: uniqid(),
		question:
			"Which of following element is responsible for making text italic in HTML?",
		options: [
			{
				value: "<pre>",
				isCorrect: false,
			},
			{
				value: "<a>",
				isCorrect: false,
			},
			{
				value: "<b>",
				isCorrect: false,
			},
			{
				value: "<i>",
				isCorrect: true,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
	{
		questionId: uniqid(),
		question: "<hr>tag in html is used for?",
		options: [
			{
				value: "horizontal ruler",
				isCorrect: true,
			},
			{
				value: "vertical ruler",
				isCorrect: false,
			},
			{
				value: "new paragraph",
				isCorrect: false,
			},
			{
				value: "new line",
				isCorrect: false,
			},
		],

		hasMultipleCorrectAnswers: false,
	},
];
export default question;
