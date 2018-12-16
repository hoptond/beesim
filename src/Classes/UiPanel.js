import React, { Component } from 'react';

class UiPanel extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			active: true
		}
	}
	
	//TODO: move the panel offscreen by dragging it rather than doing onClick
	render() {
		return (
		<div className={this.getClassName()} onClick={(e) => this.togglePanel(e)}>
			{this.props.children}
			</div>
			);
	}
	
	getClassName() {
		let output = "uipanel"
		return output += this.state.active ? "" : " offscreen"
	}
	
	togglePanel = (e) => {
		if(e.target.className !== "uibutton") {
			this.setState({ 
				active: !this.state.active
			})
		}

	}

}

export default UiPanel