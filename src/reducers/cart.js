export const ADD_TO_CART = "cart/ADD_TO_CART";
export const TOTAL_CART_ITEM = "cart/TOTAL_CART_ITEM";
export const TOGGLE_CART = "cart/SHOW_CART";
export const CART_TOTAL = "cart/CART_TOTAL";

const initialState = {
  cartData: [],
  totalItem: 0,
  cartShow: false,
  cartTotal: 0
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
    case CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload
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
    dispatch(cartTotal());
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
    dispatch(cartTotal());
  };
};

export const toggleCart = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_CART,
      payload: !getState().cart.cartShow
    });
  };
};
export const cartTotal = () => {
  return (dispatch, getState) => {
    let storeCart = getState().cart.cartData;
    const totalVal = storeCart.reduce((a, c) => a + c.item.price * c.qty, 0);
    dispatch({
      type: CART_TOTAL,
      payload: totalVal
    });
  };
};

export const checkout = id => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: []
    });
    dispatch({
      type: TOTAL_CART_ITEM,
      payload: 0
    });
    dispatch({
      type: CART_TOTAL,
      payload: 0
    });
    dispatch(toggleCart());
  };
};
