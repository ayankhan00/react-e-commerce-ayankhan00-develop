/** @format */

import redux, { createStore } from 'redux';
import CartReducer from './Cart/CartReducer';

export const store = createStore(CartReducer);
