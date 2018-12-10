import React, { Component } from 'react';

class Bee extends Component {
	
	constructor(probs) {
		super(probs)
		this.state = {
			X: 0,
			Y: 0
		}
		console.log(this.state);
	}
	
	render() {
		console.log(this.state);
		return (
		<div className="bee" style={{left: this.state.X, top: this.state.Y}}>
			</div>
			);
	}
}

export default Bee