/** @format */

import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './Products.css';
import { useParams } from 'react-router-dom';

function Product() {
	let { category } = useParams();
	const [product, setProduct] = useState([]);
	const [productBackend, setProductBackend] = useState([]);
	const [input, setInput] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const endPoint = category
				? `http://localhost:9050/products/getProductByCategory?category=${category} `
				: `http://localhost:9050/products/getProduct`;
			const { data: resdata } = await axios.get(endPoint);
			setProduct(resdata);
			setData(resdata);
				console.log(resdata);
		};
		fetchData();
	}, []);

	const handleChange = (e) => {
		setInput(e.target.value);
		const s = product.filter((prod) => {
			return prod.title
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		setData(s);
	};
	const handleSortName = () => {
		let sortedData = [...data].sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
		setData(sortedData);
		sortedData = [...product].sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
		setProduct(sortedData);
	};

	const handleSortPrice = () => {
		let sortedData = [...data].sort((a, b) => {
			if (a.price < b.price) {
				return -1;
			}
			if (a.price > b.price) {
				return 1;
			}
			return 0;
		});
		setData(sortedData);
		sortedData = [...product].sort((a, b) => {
			if (a.price < b.price) {
				return -1;
			}
			if (a.price > b.price) {
				return 1;
			}
			return 0;
		});
		setProduct(sortedData);
	};

	return (
		<>
			<h1 className='title'>Product List</h1>
			<div className='center'>
				<div id='add-task' className='add-task'>
					<input
						type='text'
						placeholder='Search...'
						value={input}
						onChange={handleChange}
					/>
					<button onClick={handleSortName}>Sort by Name</button>
					<button onClick={handleSortPrice}>Sort by Price</button>
				</div>
				<div className='property-card'>
					{data.map((p, index) => (
						<Card
							key={index}
							id={p.id}
							title={p.title}
							price={p.price}
							image={p.image}
							category={p.category}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Product;
