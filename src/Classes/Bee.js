import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'

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
	

	handleClickOutside = (e) => {
		
		if(e.button === 0 && e.target.className === "gamescreen") {
			var screen = document.getElementById('gamescreen').getBoundingClientRect()
			let x = e.pageX - screen.x;
			let y = e.pageY - screen.y;
			this.setState({
				targX: x,
				targY: y
			})
		}
	}
	
	update = () => {
		this.move()
		this.flutter()
		window.requestAnimationFrame(this.update)
	}
	
	move = () => {
		let dist = Math.hypot(this.state.targX - this.state.posX, this.state.targY - this.state.posY)
		if (dist > this.state.speed) {
			
			
			if(this.state.posX > this.state.targX) {
				this.setState({posX: this.state.posX - this.state.speed})
			} else if(this.state.posX < this.state.targX) {
				this.setState({posX: this.state.posX + this.state.speed})
			}
			
			
			if(this.state.posY > this.state.targY) {
				this.setState({posY: this.state.posY - this.state.speed})
			} else if(this.state.posY < this.state.targY) {
				this.setState({posY: this.state.posY + this.state.speed})
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

export default onClickOutside(Bee)