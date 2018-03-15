/*
	All reducers get 2 args: current state + action
	state arg is not app state, only the state
	"state = null": if object undefined, set to null
*/
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	//returns state when user first enters application and no book selected
	return state;
}