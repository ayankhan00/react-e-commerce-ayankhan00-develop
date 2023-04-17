/** @format */

import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ id, title, price, image, category }) {
	return (
		<div className='card'>
			<Link
				to={`/product-detail/${id}`}
				style={{ textDecoration: 'none' }}>
				<img src={image} alt='product image' />
				<h4 className='product-name'>{title}</h4>
				<p className='product-category'>{category}</p>
				<p className='product-price'>${price}</p>
			</Link>
		</div>
	);
}

export default Card;
