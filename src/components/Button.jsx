import { Component } from "react";
class Button extends Component {
	render() {
		return <button onClick={this.props.increment}>+</button>;
	}
}
export default Button;
