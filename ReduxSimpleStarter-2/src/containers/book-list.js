import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	/*
		Map over array of books and list book's title
	*/
	renderList() {
		return this.props.books.map((book) => {
			return(
				<li
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}

}

function mapStateToProps(state) {
	/*
		Shows up as props inside of Book List ie. shows up as this.props in BookList
		The glue between react and redux
		When state changes, container will re-render
		When application state changes, object in state function will be assigned to props
	*/
	return {
		books: state.books
	};
}

/*
	Anything returned from this function becomes props on BookList container
	this.props.selectBook calls action creator
*/
function mapDispatchToProps(dispatch) {
	/* 
		Whenever selectBook called, result should be passed to all reducers
		Whenever selectBooks action gets called, send to dispatch function
		dispatch takes all functions and sends to all reducers
	*/
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}

/* 
	connect takes function and components, and produces a container
	Promote BookList from component to container:
		needs to know about new dispatch method (selectBook). Make it a prop
*/
export default connect(mapStateToProps, mapDispatchToProps) (BookList);