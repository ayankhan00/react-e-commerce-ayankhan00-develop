/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../utils/firebase/firebase';

const auth = getAuth(app);

const initialValues = {
	email: '',
	password: '',
};

const validationSchema = Yup.object({
	email: Yup.string()
		.email('Invalid Email Format')
		.required('Email is Required'),
	password: Yup.string().required('Please Enter your password'),
});

function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const redirectFrom = location.state?.location.pathname;
	const onSubmit = (values) => {
		signInWithEmailAndPassword(auth, values.email, values.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				localStorage.setItem('token', user.accessToken);
				localStorage.setItem('user', user);
				redirectFrom ? navigate(redirectFrom) : navigate('/home');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	const handleSignUp = () => {
		navigate('/sign-up');
	};

	return (
		<>
			<h1 className='title'>Login Page</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
				<Form>
					<div className='form-control'>
						<label htmlFor='email'>Email: </label>
						<Field
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email'
						/>
						<ErrorMessage name='email' />
					</div>

					<div className='form-control'>
						<label htmlFor='password'>Password: </label>
						<Field
							type='password'
							id='password'
							name='password'
							placeholder='Enter your password'
						/>
						<ErrorMessage name='password' />
					</div>

					<button type='submit'>Login</button>
				</Form>
			</Formik>
			<button onClick={handleSignUp}>Sign up</button>
		</>
	);
}

export default Login;
