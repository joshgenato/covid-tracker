import React, { useReducer } from 'react';
import axios from 'axios';
import CovidContext from './covidContext';
import CovidReducers from './covidReducers';
import { GET_RESULTS } from './types';

const CovidState = (props) => {
	const initialState = {
		results: null,
	};

	const [state, dispatch] = useReducer(CovidReducers, initialState);

	// Get Results
	const getResults = async () => {
		try {
			const res = await axios.get('https://api.covid19api.com/summary');
			dispatch({
				type: GET_RESULTS,
				payload: res.data,
			});
		} catch (err) {}
	};

	return (
		<CovidContext.Provider
			value={{
				results: state.results,
				getResults,
			}}>
			{props.children}
		</CovidContext.Provider>
	);
};

export default CovidState;
