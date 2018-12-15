import React, { Component } from 'react';
import Bee from './Bee.js'

class Gamescreen extends Component {
	
	render() {
		return (
		<div className="gamescreen"
			 onClick={(e)=> this.handleClick(e)}>
			
			<Bee X={500} Y={400}/>
			</div>
			);
	}
	
	handleClick(e) {
		console.log(e.pageX - e.target.offsetLeft)
		console.log(e.pageY - e.target.offsetTop)
	}
}

export default Gamescreen