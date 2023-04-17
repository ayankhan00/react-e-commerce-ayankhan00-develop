/** @format */

import { INCREMENT_COUNT, DECREMENT_COUNT } from './CounterType';

const INITIAL_STATE = {
	count: 0,
};

const CountReducer = (prevState = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			return {
				...prevState,
				count: prevState.count + 1,
			};
		case DECREMENT_COUNT:
			return {
				...prevState,
				count: prevState.count - 1,
			};
		default:
			return prevState;
	}
};

export default CountReducer;
