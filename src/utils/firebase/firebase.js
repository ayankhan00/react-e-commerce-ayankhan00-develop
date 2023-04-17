/** @format */

// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyANw9j4T4fD_ZfiXhoxMZ7dyf0gt0WLlUk',
	authDomain: 'e-commere-store.firebaseapp.com',
	projectId: 'e-commere-store',
	storageBucket: 'e-commere-store.appspot.com',
	messagingSenderId: '941549590439',
	appId: '1:941549590439:web:fdcb1010c5b1a0c4c34882',
	measurementId: 'G-NDXQYSP5L9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
