/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
	return (
		<div>
			<h1 className='title'>404 Error Page</h1>
			<Link to='/home'>Go to Home Page</Link>
		</div>
	);
}

export default ErrorPage;
