import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
//Root Reducers...
import rootReducer from './../root.reducers';
const middlewares = [];
// Development* Mode Console log
if (process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
}
// Reducers Exist Store 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default { store };