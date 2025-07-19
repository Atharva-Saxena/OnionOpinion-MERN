// Add item to cart
export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: product
  });

  // Save to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

// Remove item from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: id
  });

  // Update localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

// Update item quantity
export const updateQuantity = (id, quantity) => (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity }
  });

  // Update localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

// Clear cart
export const clearCart = () => (dispatch) => {
  dispatch({ type: 'CLEAR_CART' });
  
  // Clear from localStorage
  localStorage.removeItem('cartItems');
};