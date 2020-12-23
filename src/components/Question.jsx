import { Component } from "react";
export class Question extends Component {
	render() {
		let { question } = this.props;
		return (
			<form>
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
					<input type="reset" value="Reset"></input>
					<button>Next</button>
					<button>Submit</button>
				</div>
			</form>
		);
	}
}
export default Question;
