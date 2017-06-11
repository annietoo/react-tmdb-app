import {combineReducers} from 'redux';
import SpotlightReducer from './spotlightReducer';

const rootReducer = combineReducers({
	spotlightMovies: SpotlightReducer
});

export default rootReducer;