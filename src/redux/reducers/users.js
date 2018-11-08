const initialState = {
  userLoggedIn: false,
  currentUser: null,
  usersFollowing: [],
  selectedRestaurant: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      localStorage.setItem("jwt", action.payload)
      return {
        ...state, userLoggedIn: true, currentUser: action.payload
      };
    case 'LOG_USER_OUT':
      return {
        ...state, userLoggedIn: false, currentUser: null
      };
    case 'ADD_FOLLOWED':
      return {
        ...state, usersFollowing:[...state.usersFollowing, action.payload]
      }
    case 'SELECT_RESTAURANT':
      return {
        ...state, selectedRestaurant: action.payload
      }
    default:
      return state;
  }
};

export default usersReducer
