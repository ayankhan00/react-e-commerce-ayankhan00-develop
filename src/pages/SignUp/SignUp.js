/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../utils/firebase/firebase';

const auth = getAuth(app);
const initialValues = {
	email: '',
	firstName: '',
	lastName: '',
	phoneNumber: '',
	password: '',
	confirmPassword: '',
};

const onSubmit = (values) => {
	console.log('Form data', values);
	createUserWithEmailAndPassword(auth, values.email, values.password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			alert(errorMessage);
			// ..
		});
};

const validationSchema = Yup.object({
	email: Yup.string()
		.email('Invalid Email Format')
		.required('Email is Required'),
	firstName: Yup.string().required('Enter Your First Name'),
	lastName: Yup.string(),
	phoneNumber: Yup.string()
		.required('Please Enter your Contact')
		.matches(/^(\+92|0|92)[0-9]{10}/, 'Invalid Phone Number'),
	password: Yup.string().required('Please Enter your password'),
	// confirmPassword: Yup.string().required.oneOf([Yup.ref("password"), null], "Passwords must match")
});

function SignUp() {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/login');
	};
	return (
		<>
			<h1 className='title'>SignUp Page</h1>
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
						<label htmlFor='firstName'>First Name: </label>
						<Field
							type='text'
							id='firstName'
							name='firstName'
							placeholder='Enter your First Name'
						/>
						<ErrorMessage name='firstName' />
					</div>
					<div className='form-control'>
						<label htmlFor='lastName'>Last Name: </label>
						<Field
							type='text'
							id='lastName'
							name='lastName'
							placeholder='Enter your Last Name'
						/>
						<ErrorMessage name='lastName' />
					</div>
					<div className='form-control'>
						<label htmlFor='phoneNumber'>Phone Number: </label>
						<Field
							type='tel'
							id='phoneNumber'
							name='phoneNumber'
							placeholder='+923*****'
						/>
						<ErrorMessage name='phoneNumber' />
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
					<div className='form-control'>
						<label htmlFor='confirmPassword'>
							Confirm Password:{' '}
						</label>
						<Field
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							placeholder='Confirm your password'
						/>
						<ErrorMessage name='confirmPassword' />
					</div>

					<button type='submit'>Sign Up</button>
				</Form>
			</Formik>
			<button onClick={handleLogin}>Already have account?</button>
		</>
	);
}

export default SignUp;
