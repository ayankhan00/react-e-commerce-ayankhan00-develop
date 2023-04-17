/** @format */

import React from 'react';
import { getAuth } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
	const user = localStorage.getItem('token');
	// const user = true;
	const location = useLocation();
	if (!user) {
		return <Navigate to='/login' state={{ location }} />;
	}
	return children;
}

export default PrivateRoute;
