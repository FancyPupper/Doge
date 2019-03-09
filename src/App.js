import React, { Component } from 'react';
import './App.css';

class DogeMeme extends Component {
	render(){
		return (
			<div className="dog">
				<div  id="up" className="white">
					<p>Soy un texto</p>
				</div>
				<div id="down" className="white">
					<p>Soy otro texto</p>
				</div>
			</div>
		)
	}
}

export default DogeMeme;
