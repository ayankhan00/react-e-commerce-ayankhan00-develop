/** @format */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import CartCounter from '../../components/cartCounter/CartCounter';
import { refundItem } from '../../redux/Cart/CartAction';

function Cart() {
	const cart = useSelector((state) => state.items);
	const dispatch = useDispatch();
	console.log(cart);
	const handleRemove = (index) => {
		dispatch(refundItem(index));
	};
	return (
		<div>
			{/* {console.log(cartItem.count)} */}
			<h1 className='title' style={{ marginBottom: '3rem' }}>
				Cart Page
			</h1>
			{cart.map((i, index) => (
				<div key={index}>
					<img className='img' src={i.image} alt='product image' />
					<h4 className='product-name'>{i.title}</h4>
					<p className='product-category'>{i.category}</p>
					<p className='product-price'>${i.price}</p>
					<CartCounter count={i.count} index={index} />
					<button onClick={(index) => handleRemove(index)}>
						Remove Item
					</button>
				</div>
			))}
			<br />

			<br />
			<Link to='/checkout/user-detail-form'>Proceed</Link>
			<br />
			{/* <Link to='/checkout/order-completed'>Checkout</Link> */}
			{/* <Outlet /> */}
		</div>
	);
}

export default Cart;
