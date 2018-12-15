import React, { Component } from 'react';

class Bee extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			posX: this.props.X,
			posY: this.props.Y,
			targX: this.props.X,
			targY: this.props.Y,
			speed: 1
		}
		window.requestAnimationFrame(this.update)
	}
	
	setTarget(x, y) {
		this.setState({
			targX: x,
			targY: y
		})
	}
	
	update = () => {
		this.move()
		this.flutter()
		window.requestAnimationFrame(this.update)
	}
	
	move = () => {
		let dist = Math.hypot(this.state.targX - this.state.posX, this.state.targY - this.state.posY)
		if (dist > this.state.speed) {
			switch(true) {
				case this.state.posX > this.state.targX:
					this.setState({posX: this.state.posX - this.state.speed})
					break
				case this.state.posX < this.state.targX:
					this.setState({posX: this.state.posX + this.state.speed})
					break
				case this.state.posY > this.state.targY:
					this.setState({posY: this.state.posY - this.state.speed})
					break
				case this.state.posY < this.state.targY:
					this.setState({posY: this.state.posY + this.state.speed})
					break
				default
					//we are perfectly aligned with our target, so do nothing
					break
			}
		}
	}
		
	flutter = () => {
		this.setState({
			posX: this.state.posX + 1 - (Math.random() * 2),
			posY: this.state.posY + 1 - (Math.random() * 2)
		})
	}
	
	render() {
		return (
		<div className="bee center-object" style={{left: this.state.posX, top: this.state.posY}}>
			</div>
			);
	}
}

export default Bee