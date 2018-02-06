import React, { Component } from 'react';


/*
	Class-Based Component - component that needs to be aware of state
*/
class SearchBar extends Component {
	/*
		Initialize state with some properties
		"term" is updated whenever user changes search string
	*/
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}
	/*
		Notes:
		- never change state variable directly (this.state.term = ""); use setState({term: ""})
		- okay to use this.state.term for reference
		- SearchBar is a Controlled Component: value set by state, changes when state changes
	*/
	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.terms}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;