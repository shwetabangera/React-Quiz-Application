import { Component } from "react";
import Instruction from "./Instruction";
import questions from "../data/questions.js";
import Question from "./Question";
//import UserInput from "./UserInput";
class QuizApplication extends Component {
	state = {
		isQuizStarted: false,
		questions: "",
	};
	startQuiz = (event) => {
		this.setState({ isQuizStarted: false });
	};
	componentDidMount() {
		let quizQuestions = questions.map((question) => {
			return {
				...question,
				isCorrectlyAnswered: false,
				timeTaken: 0,
				isAttempted: false,
				isSubmitted: false,
				selectedAnswer: "",
			};
		});
		this.setState({ questions: [...quizQuestions] });
	}

	render() {
		return (
			<div>
				<h1>Quiz Application{this.state.userName}</h1>
				{this.state.isQuizStarted ? (
					<div>
						<Question question={this.state.questions[0]} />
					</div>
				) : (
					<div>
						{" "}
						<Instruction />
						<button onClick={this.startQuiz}>Start Quiz</button>{" "}
					</div>
				)}
			</div>
		);
	}
}
export default QuizApplication;
