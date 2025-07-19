import axios from 'axios';

// Set a single filter preference
export const setFilterPreference = (key, value) => ({
  type: 'SET_FILTER_PREFERENCE',
  payload: { key, value }
});

// Reset all filters to default
export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});

// Save user filter preferences to backend (for logged in users)
export const savePreferences = (preferences) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    
    // Only proceed if user is authenticated
    if (!auth.isAuthenticated) {
      return;
    }
    
    dispatch({ type: 'SAVE_PREFERENCES_REQUEST' });
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.user.token}`
      }
    };
    
    await axios.post('/api/filters/preferences', preferences, config);
    
    dispatch({ type: 'SAVE_PREFERENCES_SUCCESS' });
  } catch (error) {
    dispatch({
      type: 'SAVE_PREFERENCES_FAILURE',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};