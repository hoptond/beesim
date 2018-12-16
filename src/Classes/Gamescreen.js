import React, { Component } from 'react';
import Bee from './Bee.js'


class Gamescreen extends Component {
	render() {
		return (
		<div id="gamescreen" className="gamescreen">
			<Bee X={500} Y={400}/>
			{this.props.children}
			</div>
			);
	}
}

export default Gamescreen