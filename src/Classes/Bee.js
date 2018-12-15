import React, { Component } from 'react';

class Bee extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			posX: this.props.X,
			posY: this.props.Y,
			targX: this.props.X,
			targY: this.props.Y,
			speed: 3
		}
		window.requestAnimationFrame(this.flutter);
	}
	
	flutter = () => {
		this.setState({
			posX: this.state.posX + 1 - (Math.random() * 2),
			posY: this.state.posY + 1 - (Math.random() * 2)
		})
		window.requestAnimationFrame(this.flutter);
	}
	
	render() {
		return (
		<div className="bee" style={{left: this.state.posX, top: this.state.posY}}>
			</div>
			);
	}
}

export default Bee