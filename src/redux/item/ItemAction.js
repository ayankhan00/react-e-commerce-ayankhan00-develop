/** @format */

import { BUY_ITEM, REFUND_ITEM } from './ItemType';

export const refundItem = (index) => {
	return {
		type: REFUND_ITEM,
		payload: {
			info: 'User buy a Item',
			index: index,
		},
	};
};
export const buyItem = (itemData) => {
	return {
		type: BUY_ITEM,
		payload: {
			info: 'User buy a Item',
			items: itemData,
		},
	};
};
