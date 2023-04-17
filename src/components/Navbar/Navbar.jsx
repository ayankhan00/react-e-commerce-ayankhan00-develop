/** @format */

import React from 'react';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const navigate = useNavigate();
	const handleLogout = () => {
		console.log( 'Logout' );
		navigate( '/home' );
	};
	return (
		<div>
			<nav className='nav'>
				<Link to='/home' className='site-title'>
					E-Commerce Site
				</Link>
				<ul>
					<Link to='/checkout'>Cart</Link>
					<Link to='/product'>All Products</Link>
					<Link to='/category'>Category</Link>
					<Link onClick={handleLogout}>Logout</Link>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar;
