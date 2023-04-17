/** @format */

import { BUY_ITEM, DECREMENT, INCREMENT, REMOVE_ITEM } from './CartType';

export const addItem = (item) => {
	return {
		type: BUY_ITEM,
		item: item,
	};
};

export const refundItem = (index) => {
	return {
		type: REMOVE_ITEM,
		index: index,
	};
};
export const increment = (index) => {
	return {
		type: INCREMENT,
		index: index,
	};
};
export const decrement = (index) => {
	return {
		type: DECREMENT,
		index: index,
	};
};
