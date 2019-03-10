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
	//	console.log(this.state);

	}

	handleReset = (event)=> {
		event.preventDefault();
		this.setState({
			top:'RESET MUCH',
			bottom:'HOW GOOD'
		})
	//	console.log(this.state);

	}

	/*clickMe = (event) => {
		let name = event.target.name;


		event.preventDefault();

		this.setState({
		top:'RESET MUCH',
		bottom:'HOW GOOD'
		})
	}*/

	render(){
		return (
			<div>
				<form id="ins" onSubmit={this.handleReset}>
	        		<input type="text" value={this.state.top} name="top" onChange={this.handleInputChange}/>
	        		<input type="text" value={this.state.bottom} name="bottom" onChange={this.handleInputChange}/>
	        		<input type="submit" value="Reset"/>
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
