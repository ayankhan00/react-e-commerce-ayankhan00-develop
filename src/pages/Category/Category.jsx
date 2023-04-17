/** @format */
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:9050/products/getCategory').then((res) => {
			setCategory(res.data);
		});
	}, []);
	return (
		<div>
			<h1 className='title'>Category</h1>
			<br />
			<br />
			{category.map((p, index) => (
				<div>
					<Link
						to={`/product/${p}`}
						key={index}
						className='creative-button'
					>
						{p}
					</Link>
					<br />
					<br />
					<br />
				</div>
			))}
		</div>
	);
};

export default Category;
