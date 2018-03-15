/* 
	selectBook is an ActionCreator, needs to return an action
	An object wtih type property
	Action - user selects book
	payload - data that describes action undertaken
*/ 
export function selectBook(book) {
	
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}