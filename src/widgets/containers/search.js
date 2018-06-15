import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
	state = {
		//Valor por defecto que va a aparecer en el input
		value: ''
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value, 'Submit')
	}

	setInputRef = element => {
		this.input = element;
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ', '-')
		})
	}

	render(){
		return(
			<Search 
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleInputChange}
				value={this.state.value}
			/>
		)
	}
}

export default SearchContainer;