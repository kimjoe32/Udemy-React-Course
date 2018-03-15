import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        //term is the value of the user input to the search bar
        this.state = {term: ''}; 
        //bind contexts
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    /*
        When user inputs a city
    */
    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    /*
        Used to prevent browser from making post request because we use a form
        Why form element? because additional functionality like pressing Enter
    */
    onFormSubmit(event) {
        event.preventDefault();

        //fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />
                <span className="input-group-btn">
                    <button type="submit" className= "btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
/*
    Hook up action creator to this component
    Send action to middleware and then to reducers
*/
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

/*
    null: becase mapDTP is always passed as second argument
*/
export default connect(null, mapDispatchToProps)(SearchBar);