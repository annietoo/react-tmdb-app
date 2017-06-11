import {GET_SPOTLIGHT_MOVIES} from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case GET_SPOTLIGHT_MOVIES:
			return [...state, action.payload];
		default:
			return state;
	}
}