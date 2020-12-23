import { Component } from "react";
export class Question extends Component {
	render() {
		let { question } = this.props;
		return (
			<div>
				<h1>{question.question}</h1>
				{question.options.map((option) => {
					return (
						<div key={option.value}>
							<input
								type="radio"
								value={option.value}
								name={question.questionId}
							/>
							<label htmlFor={question.questionId}>{option.value}</label>
						</div>
					);
				})}
				<button>Reset</button>
				<button>Next</button>
			</div>
		);
	}
}
export default Question;
