/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/Cart/CartAction';

function CartCounter({ count, index }) {
	const dispatch = useDispatch();
	const [value, setValue] = useState(count);
	const [id, setId] = useState(index);
	const handleIncrement = () => {
		console.log(id);
		dispatch(increment(id));
		setValue(value + 1);
	};

	// const handleIncrement = () => {
	// 	setValue(value + 1);
	// };

	const handleDecrement = () => {
		dispatch(decrement(id));
		value > 1 && setValue(value - 1);
	};
	return (
		<>
			<h3>ITem Count: {value}</h3>
			<div>
				<button onClick={handleIncrement} style={{ width: '30px' }}>
					+
				</button>
				<button onClick={handleDecrement} style={{ width: '30px' }}>
					-
				</button>
			</div>
		</>
	);
}
export default CartCounter;
