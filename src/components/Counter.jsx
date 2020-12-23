import { Component } from "react";
import Button from "./Button";
class Counter extends Component {
	state = {
		count: 0,
	};

	incrementCount(event) {
		this.setState({ count: this.state.count + 1 });
	}
	/* 	startTimer = (event) => {
		this.setState({
			timerOn: true,
			time: this.state.time,
			startTimer:  this.state.startTimer
		});
		this.timer = setInterval(() => {
			this.setState({ startTimer: this.state.startTimer + 1 });
		}, 1000);
	};  */

	render() {
		return (
			<div>
				<p>Counter value= {this.state.count}</p>
				<Button incrementCount={this.incrementCount} />
			</div>
		);
	}
}
export default Counter;
