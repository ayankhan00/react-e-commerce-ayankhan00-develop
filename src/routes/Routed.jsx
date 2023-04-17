/** @format */

import React from 'react';
import Product from '../pages/Products/Products';
import Category from '../pages/Category/Category';
import Home from '../pages/Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout';
import Form from '../pages/User-Detail-Form';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const Routed = () => {
	return (
		<div>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/' element={<Navbar />}>
					<Route path='/home' element={<Home />} />
					<Route path='/product/:category?' element={<Product />} />
					<Route
						path='/category'
						element={
							<PrivateRoute>
								<Category />
							</PrivateRoute>
						}
					/>
					<Route
						path='/product-detail/:id?'
						element={
							<PrivateRoute>
								<ProductDetail />
							</PrivateRoute>
						}
					/>
					<Route path='/page-not-found' element={<ErrorPage />} />

					<Route
						path='/checkout'
						element={
							<PrivateRoute>
								<Cart />
							</PrivateRoute>
						}
					></Route>
					<Route
						path='/checkout/order-completed'
						element={<Checkout />}
					/>
					<Route
						path='/checkout/user-detail-form'
						element={<Form />}
					/>

					<Route path='/' element={<Navigate to='/home' />} />
					<Route
						path='/*'
						element={<Navigate to='/page-not-found' />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default Routed;
