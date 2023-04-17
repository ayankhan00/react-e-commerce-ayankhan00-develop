/** @format */

import React from 'react';
import './Counter.css'

function Counter({ count, handleIncrement, handleDecrement }) {
	return (
		<div class='counter'>
			<div>
				<button onClick={() => handleIncrement()} class='counter-btn'>
					+
				</button>
				<h3 class='counter-value'>{count}</h3>
				<button onClick={() => handleDecrement()} class='counter-btn'>
					-
				</button>
			</div>
		</div>
	);
}
export default Counter;
