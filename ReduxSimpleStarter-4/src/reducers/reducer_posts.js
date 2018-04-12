import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    //default state to empty object for default (no posts)
    //post(s) that we fetch is the action.payload.data property
    switch(action.type) {
        case DELETE_POST:
            //update our local state to reflect server state
            //if state object has key=action.payload, omit it and return new 
            // object without that object
            return _.omit(state, action.payload);
        case FETCH_POST:
            const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            //key = action.payload.data.id, value = action.payload.data
            //add to overall state when user fetches a new post
            return { ...state, [action.payload.data.id]: action.payload.data};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}