import { GET_RESULTS } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_RESULTS:
			return {
				...state,
				results: action.payload,
			};

		default:
			return state;
	}
};
