const initialState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        items: action.payload.products,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        loading: false,
        error: null
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;