import { Component } from "react";
import Button from "./Button";
class Counter extends Component {
	state = {
		count: 0,
	};

	incrementCount(event) {
		this.setState({ count: this.state.count + 1 });
	}

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
