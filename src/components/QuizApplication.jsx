import { Component } from "react";
import questions from "../data/questions.js";
import Question from "./Question";
import Instruction from "./Instruction";
export class QuizApplication extends Component {
	state = {
		isQuizStarted: false,
		questions: [],
	};
	startQuiz = (event) => {
		this.setState({
			isQuizStarted: true,
		});
	};
	componentDidMount() {
		let quizQuestions = questions.map((question) => {
			return {
				...question,
				isCorrectlyAnswered: false,
				timeTaken: 0,
				isAttempted: false,
				isSubmitted: false,
				selectedAnswer: false,
			};
		});
		this.setState({ questions: [...quizQuestions] });
	}
	render() {
		return (
			<div>
				<h1>Quiz Application</h1>
				{this.state.isQuizStarted ? (
					<Question questions={this.state.questions[0]} />
				) : (
					<div>
						{" "}
						<Instruction />
						<button onClick={this.startQuiz}>Start Quiz</button>
					</div>
				)}
			</div>
		);
	}
}
export default QuizApplication;
