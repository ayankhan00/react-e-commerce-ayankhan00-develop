/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1 className='title color-changing'>Welcome</h1>
			{/* <h1 class='color-changing'>Hello World!</h1> */}
			<br />
			<br />
			{/* <div className=''></div> */}
			<Link to='/category' className='creative-button'>
				To Category
			</Link>
			<br />
			<br />
			<br />
			<Link to='/product' className='creative-button'>
				To Product
			</Link>
		</div>
	);
};
export default Home;
