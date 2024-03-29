import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	console.log('Action received', action);
	switch(action.type) {
		case FETCH_WEATHER:
//			return state.concat([ action.payload.data ]);
			return [ action.payload.data, ...state ]; // returns [ city, city, city ]
	}	
	return state;
}
