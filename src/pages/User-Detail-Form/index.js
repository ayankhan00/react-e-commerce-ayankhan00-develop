/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const initialValues = {
	country: '',
	firstName: '',
	lastName: '',
	address: '',
	city: '',
	zip: '',
	phoneNumber: '',
	checkbox: '',
};

const onSubmit = (values) => {
	console.log('Form data', values);
};

const validationSchema = Yup.object({
	country: Yup.string().required('Country Required'),
	firstName: Yup.string().required('Enter Your First Name'),
	lastName: Yup.string(),
	address: Yup.string().required('Address Required'),
	city: Yup.string().required('City Required'),
	zip: Yup.string().required('Zip code Required'),
	phoneNumber: Yup.string()
		.required('Please Enter your Contact')
		.matches(`^(?:\\+923|00923|03)[0-9]{9}$`, 'Invalid phone format'),
});

function index() {
	return (
		<div style={{ marginTop: '100px' }}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form>
					<div className='form-control'>
						<label htmlFor='country'></label>
						<Field
							type='text'
							id='country'
							name='country'
							placeholder='Country/region'
						/>
						<ErrorMessage name='country' />
					</div>

					<div className='form-control'>
						<label htmlFor='firstName'></label>
						<Field
							type='text'
							id='firstName'
							name='firstName'
							placeholder='First Name'
						/>
						<ErrorMessage name='firstName' />
					</div>
					<div className='form-control'>
						<label htmlFor='lastName'></label>
						<Field
							type='text'
							id='lastName'
							name='lastName'
							placeholder='Last Name'
						/>
						<ErrorMessage name='lastName' />
					</div>
					<div className='form-control'>
						<label htmlFor='address'></label>
						<Field
							type='text'
							id='address'
							name='address'
							placeholder='Address'
						/>
						<ErrorMessage name='address' />
					</div>
					<div className='form-control'>
						<label htmlFor='city'></label>
						<Field
							type='text'
							id='city'
							name='city'
							placeholder='City'
						/>
						<ErrorMessage name='city' />
					</div>
					<div className='form-control'>
						<label htmlFor='zip'></label>
						<Field
							type='number'
							id='zip'
							name='zip'
							placeholder='Please enter 5 digit Postal code'
						/>
						<ErrorMessage name='zip' />
					</div>
					<div className='form-control'>
						<label htmlFor='phoneNumber'></label>
						<Field
							type='tel'
							id='phoneNumber'
							name='phoneNumber'
							placeholder='0300-*******'
						/>
						<ErrorMessage name='phoneNumber' />
					</div>
					<button type='submit'>
						<Link to='/checkout/order-completed'>Submit</Link>
					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default index;
