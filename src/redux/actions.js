export const loginUser = (user = null) => ({
  type: 'LOG_USER_IN',
  user
});

export const logoutUser = () => ({
  type: 'LOG_USER_OUT'
});

export const follow = (user = null) => ({
  type: 'ADD_FOLLOWED',
  user
});

export const selectRestaurant = (restaurant = null) => ({
  type: 'SELECT_RESTAURANT',
  restaurant
});
