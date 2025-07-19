const initialState = {
  preferences: {
    isVegetarian: null,
    hasRefrigeration: null,
    readyToEat: null,
    maxBudget: null,
    maxCalories: null
  },
  loading: false,
  error: null
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_PREFERENCE':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          [action.payload.key]: action.payload.value
        }
      };
    
    case 'RESET_FILTERS':
      return {
        ...state,
        preferences: initialState.preferences
      };
      
    case 'SAVE_PREFERENCES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case 'SAVE_PREFERENCES_SUCCESS':
      return {
        ...state,
        loading: false
      };
      
    case 'SAVE_PREFERENCES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};

export default filterReducer;