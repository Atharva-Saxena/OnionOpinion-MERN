import axios from 'axios';

// Fetch products with optional filters and pagination
export const fetchProducts = (page = 1, filters = {}) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });

    // Build query string for filters
    const queryParams = new URLSearchParams();
    queryParams.append('page', page);
    
    // Add any filters that are defined
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        queryParams.append(key, value);
      }
    });

    const { data } = await axios.get(`/api/products?${queryParams.toString()}`);

    dispatch({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: {
        products: data.products,
        currentPage: data.page,
        totalPages: data.pages
      }
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

// Fetch a single product by ID
export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PRODUCT_DETAILS_REQUEST' });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: 'FETCH_PRODUCT_DETAILS_SUCCESS',
      payload: data
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCT_DETAILS_FAILURE',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};