import { Component } from "react";
import question from "../data/question.js";
import Question from "./Question";
import Instruction from "./Instruction";
export class QuizApplication extends Component {
	state = {
		isQuizStarted: false,
		question: [],
	};
	startQuiz = (event) => {
		this.setState({
			isQuizStarted: true,
		});
	};
	componentDidMount() {
		let quizQuestions = question.map((question) => {
			return {
				...question,
				isCorrectlyAnswered: false,
				timeTaken: 0,
				isAttempted: false,
				isSubmitted: false,
				selectedAnswer: false,
			};
		});
		this.setState({ question: [...quizQuestions] });
	}
	render() {
		return (
			<div>
				<h1>Quiz Application</h1>
				{this.state.isQuizStarted ? (
					<Question question={this.state.question[0]} />
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
