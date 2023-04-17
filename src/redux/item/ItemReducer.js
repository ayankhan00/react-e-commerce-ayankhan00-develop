/** @format */

// import { buyItem } from './ItemAction';
import { BUY_ITEM, REFUND_ITEM } from './ItemType';

const INITIAL_STATE = {
	item: [],
};

const ItemReducer = (prevState = INITIAL_STATE, action) => {
	switch (action.type) {
		case BUY_ITEM:
			return {
				...prevState,
				item: [...prevState.item, action.payload.items],
			};
		case REFUND_ITEM:
			let newArr = [...prevState.item];
			newArr.splice(action.payload.index, 1);
			return {
				...prevState,
				item: newArr,
			};
		default:
			return prevState;
	}
};

export default ItemReducer;
