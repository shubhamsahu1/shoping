
export const ADD_TO_CART = 'cart/ADD_TO_CART'




const initialState = {
  cartData: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.payload
       }
      
    default:
      return state
  }
}

export const addToCart = (id) => {
  return (dispatch,getState) => {
       const cartItem = getState().api.products.find((item)=>item.id===id)
       let storeCart = getState().cart.cartData
       const index = storeCart.findIndex((i)=>i.item.id === cartItem.id)
       if(index!==-1){
        storeCart[index].qty++;
       }else{
        storeCart.push({item:cartItem,qty:1})
       }
       
    dispatch({
      type: ADD_TO_CART,
      payload:storeCart
    })
   }
}
export const removeFromCart = (id) => {
  return (dispatch,getState) => {
      
       let storeCart = getState().cart.cartData
       const index = storeCart.findIndex((i)=>i.item.id === id)
       if(index!==-1){
        storeCart[index].qty--;
       }
    dispatch({
      type: ADD_TO_CART,
      payload:storeCart.filter((e)=>e.qty!==0)
    })
   }
}
