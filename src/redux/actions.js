export const loginUser = (user = null) => ({
  type: 'LOG_USER_IN',
  payload: user
});

export const logoutUser = () => ({
  type: 'LOG_USER_OUT'
});

export const setFollowed = (followed = []) => ({
  type: 'SET_FOLLOWED',
  payload: followed
})

export const follow = (user = null) => ({
  type: 'ADD_FOLLOWED',
  payload: user
});

export const unfollow = (user = null) => ({
  type: 'REMOVE_FOLLOWED',
  payload: user
});

export const selectRestaurant = (restaurant = null) => ({
  type: 'SELECT_RESTAURANT',
  restaurant
});
