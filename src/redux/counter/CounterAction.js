/** @format */

import { INCREMENT_COUNT, DECREMENT_COUNT } from './CounterType';

export const incrementCount = () => {
	return {
		type: INCREMENT_COUNT,
		info: 'Incremented a Item',
	};
};
export const decrementCount = () => {
	return {
		type: DECREMENT_COUNT,
		info: 'Decremented a Item',
	};
};
