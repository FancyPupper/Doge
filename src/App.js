import React, { Component } from 'react';
import './App.css';

class DogeMeme extends Component {
	constructor(props){
		super(props);
		this.state = {
			top:'',
			bottom:''
		};

	// this.handleInputChange = this.handleInputChange.bind(this);

	}
	handleInputChange = (event) => {
		let val = event.target.value;
		let name = event.target.name;
		// console.log(name);
		// console.log(val)
		this.setState({
			[name]: val
		})
	}

	render(){
		return (
			<div>
				<form id="ins">
	        		<input type="text" name="top" onChange={this.handleInputChange}/>
	        		<input type="text" name="bottom" onChange={this.handleInputChange}/>
	      		</form>

				<div className="dog">
					<div  id="up" className="white">
						<p>{this.state.top}</p>
					</div>
					<div id="down" className="white">
						<p>{this.state.bottom}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default DogeMeme;
