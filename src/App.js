/** @format */

import './App.css';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Routes from './routes/Routed';

function App() {
	const [user, setUser] = useState({});

	//Google Authentication Working
	
	// function handleCallbackResponse(response) {
	// 	console.log('Encoded JWT ID Token: ' + response.credential);
	// 	var userObject = jwt_decode(response.credential);
	// 	console.log(userObject);
	// 	setUser(userObject);
	// 	console.log(user);
	// 	localStorage.setItem('userKey', JSON.stringify(response.credential));
	// 	document.getElementById('signInDiv').hidden = true;
	// }

	// function handleSignOut(event) {
	// 	setUser({});
	// 	document.getElementById('signInDiv').hidden = false;
	// 	localStorage.setItem('userKey', JSON.stringify(null));
	// }
	// useEffect(() => {
	/* global google */
	// google.accounts.id.initialize({
	// 	client_id:
	// 		'941549590439-l7m5dhb6m65sa3103cg0fe3m62ff706i.apps.googleusercontent.com',
	// 	callback: handleCallbackResponse,
	// });
	// google.accounts.id.renderButton(document.getElementById('signInDiv'), {
	// 	theme: 'outline',
	// 	size: 'large',
	// });
	// const userKey = JSON.parse(localStorage.getItem('userKey'));
	// if (userKey) {
	// 	var userObject = jwt_decode(userKey);
	// 	console.log('hello ');
	// 	console.log(userObject);
	// 	setUser(userObject);
	// 	document.getElementById('signInDiv').hidden = true;
	// } else {
	// 	google.accounts.id.prompt();
	// }
	// }, []);

	return (
		<>
			<div className='App'>
				<Routes />
				{/* <div id='signInDiv' style={{ marginTop: '4rem' }}></div> */}
				{/* {console.log(user)} */}
			</div>
		</>
	);
}

export default App;
