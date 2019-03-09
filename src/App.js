import React, { Component } from 'react';
import './App.css';

class DogeMeme extends Component {
	
	render(){
		return (
			<div className="dog">
				<div  id="up" className="white">
					<p>{this.props.top}</p>
				</div>
				<div id="down" className="white">
					<p>{this.props.bottom}</p>
				</div>
			</div>
		)
	}
}

export default DogeMeme;
