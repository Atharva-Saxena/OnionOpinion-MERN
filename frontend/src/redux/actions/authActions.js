import axios from 'axios';

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });

    const { data } = await axios.post('/api/auth/login', { email, password });

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'AUTH_FAILURE',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

// Register user
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });

    const { data } = await axios.post('/api/auth/register', { name, email, password });

    dispatch({
      type: 'AUTH_SUCCESS',
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'AUTH_FAILURE',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

// Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'LOGOUT' });
};