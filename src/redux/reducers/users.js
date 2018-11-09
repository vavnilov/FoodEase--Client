const initialState = {
  userLoggedIn: false,
  currentUser: null,
  usersFollowing: [],
  selectedRestaurant: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        ...state, userLoggedIn: true, currentUser: action.payload
      };
    case 'LOG_USER_OUT':
      return {
        ...state, userLoggedIn: false, currentUser: null
      };
    case 'SET_FOLLOWED':
      return {
        ...state, usersFollowing: action.payload
      };
    case 'ADD_FOLLOWED':
      return {
        ...state, usersFollowing:[...state.usersFollowing, action.payload]
      };
    case 'REMOVE_FOLLOWED':
      return {
        ...state, usersFollowing:[...state.usersFollowing.filter(user => user !== action.payload)]
      };
    case 'SELECT_RESTAURANT':
      return {
        ...state, selectedRestaurant: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer
