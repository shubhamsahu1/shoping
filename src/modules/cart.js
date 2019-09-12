export const ADD_TO_CART = "cart/ADD_TO_CART";
export const TOTAL_CART_ITEM = "cart/TOTAL_CART_ITEM";
export const TOGGLE_CART = "cart/SHOW_CART";

const initialState = {
  cartData: [],
  totalItem: 0,
  cartShow: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.payload
      };
    case TOTAL_CART_ITEM:
      return {
        ...state,
        totalItem: action.payload
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartShow: action.payload
      };

    default:
      return state;
  }
};

export const addToCart = id => {
  return (dispatch, getState) => {
    const cartItem = getState().api.products.find(item => item.id === id);
    let storeCart = getState().cart.cartData;
    const index = storeCart.findIndex(i => i.item.id === cartItem.id);
    if (index !== -1) {
      storeCart[index].qty++;
    } else {
      storeCart.push({ item: cartItem, qty: 1 });
    }
    const total = storeCart.reduce((a, c) => a + c.qty, 0);

    dispatch({
      type: ADD_TO_CART,
      payload: storeCart
    });
    dispatch({
      type: TOTAL_CART_ITEM,
      payload: total
    });
  };
};
export const removeFromCart = id => {
  return (dispatch, getState) => {
    let storeCart = getState().cart.cartData;
    const index = storeCart.findIndex(i => i.item.id === id);
    if (index !== -1) {
      storeCart[index].qty--;
    }
    const total = storeCart.reduce((a, c) => a + c.qty, 0);
    dispatch({
      type: ADD_TO_CART,
      payload: storeCart.filter(e => e.qty !== 0)
    });
    dispatch({
      type: TOTAL_CART_ITEM,
      payload: total
    });
  };
};

export const toggleCart = id => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_CART,
      payload: !getState().cart.cartShow
    });
  };
};
