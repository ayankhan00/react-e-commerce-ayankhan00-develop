/** @format */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './ProductDetail.css';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import { addItem } from '../../redux/Cart/CartAction';

const ProductDetail = () => {
	const { id } = useParams();
	const [count, setCount] = useState(1);
	const [product, setProduct] = useState({});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const endPoint = `http://localhost:9050/products/getProductById?id=${id}`;
			// const endPoint = id && `https://fakestoreapi.com/products/${id}`;

			const { data: resdata } = await axios.get(endPoint);
			// console.log('Item', resdata);
			console.log(resdata);
			setProduct(resdata);
		};
		fetchData();
	}, []);

	const handleAddToCart = () => {
		if (count > 0) {
			dispatch(addItem({ ...product, count }));
			alert('Item Added to Cart');
		} else {
			alert('No item is Added');
		}
		// navigate('/cart');
	};

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		count > 0 && setCount(count - 1);
	};

	return (
		<div>
			<div class='product-detail-card'>
				<img src={product.image} alt='Product Image Missing' />
				<h3 class='product-detail-title'>{product.title}</h3>
				<p class='product-detail-category'>{product.category}</p>
				<p class='product-detail-price'>${product.price}</p>
				<Counter
					count={count}
					handleIncrement={handleIncrement}
					handleDecrement={handleDecrement}
				/>
				<button onClick={handleAddToCart}>Add to cart</button>
			</div>
		</div>
	);
};
export default ProductDetail;
