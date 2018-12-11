import React, { Component } from 'react';

class Bee extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			X: this.props.X,
			Y: this.props.Y
		}
		window.requestAnimationFrame(this.flutter);
	}
	
	flutter = () => {
		this.setState({
			X: this.state.X + 1 - (Math.random() * 2),
			Y: this.state.Y + 1 - (Math.random() * 2)
		})
		window.requestAnimationFrame(this.flutter);
	}
	
	render() {
		return (
		<div className="bee" style={{left: this.state.X, top: this.state.Y}}>
			</div>
			);
	}
}

export default Bee