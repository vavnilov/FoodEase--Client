import { createStore } from 'redux';
// import { createStore, applyMiddleWare } from 'redux';
// import thunk from 'redux-thunk'
import usersReducer from '../reducers/users';

 // () => {
  const store = createStore(usersReducer);
  // const store = createStore(usersReducer, applyMiddleWare(thunk));

//   return store;
// };

export default store
