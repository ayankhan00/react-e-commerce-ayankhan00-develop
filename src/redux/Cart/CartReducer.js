/** @format */
import { BUY_ITEM, DECREMENT, INCREMENT, REMOVE_ITEM } from './CartType';

const INITIAL_STATE = {
	items: [],
};

const ItemReducer = (prevState = INITIAL_STATE, action) => {
	let newArr = [...prevState.items];
	switch (action.type) {
		case BUY_ITEM:
			let idx = newArr.findIndex(
				(product) => product.id === action.item.id,
			);
			if (idx !== -1) {
				const nArr = newArr[idx];
				nArr.count = nArr.count + action.item.count;

				newArr[idx] = nArr;
				return {
					...prevState,
					items: newArr,
				};
			}
			return {
				...prevState,
				items: [...prevState.items, action.item],
			};

		case REMOVE_ITEM:
			newArr.splice(action.index, 1);
			return {
				...prevState,
				items: newArr,
			};

		case INCREMENT:
			let incArr = newArr[action.index];
			incArr.count = incArr.count + 1;
			newArr[action.index] = incArr;
			return {
				...prevState,
				items: newArr,
			};

		case DECREMENT:
			let decArr = newArr[action.index];
			decArr.count = decArr.count - 1;
			newArr[action.index] = decArr;
			return {
				...prevState,
				items: newArr,
			};
		default:
			return prevState;
	}
};

export default ItemReducer;
