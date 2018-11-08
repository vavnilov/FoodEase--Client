// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import usersReducer from '../reducers/users';

 // () => {
  // const store = createStore(usersReducer);
const store = createStore(usersReducer, applyMiddleware(thunk));

//   return store;
// };

export default store
