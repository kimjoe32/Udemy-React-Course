import { FETCH_WEATHER } from '../actions/index';

/*
    Action for when data for a city is returned
    Add city data to state array
    Remember not to manipulate state. Instead, just return a new array
*/
export default function(state=[], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            //return new version of state with old array + new data
            return [action.payload.data, ...state];
    }
    return state;
}