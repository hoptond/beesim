import React, { Component } from 'react';

class UiPanel extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
		<div className="uipanel">
			{this.props.children}
			</div>
			);
	}
	
}

export default UiPanel