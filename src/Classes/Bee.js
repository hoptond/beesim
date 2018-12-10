import React, { Component } from 'react';

class Bee extends Component {
	
	constructor(probs) {
		super(probs)
		this.state = {
			X: 0,
			Y: 0
		}
		window.requestAnimationFrame(this.flutter);
	}
	
	flutter = () => {
		this.setState({
			X: this.state.X += 1 - (Math.random() * 2),
			Y: this.state.Y += 1 - (Math.random() * 2)
		})
		console.log(this.state)
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