export const GET_REQUESTED = "api/GET_CALL_REQUESTED";
export const SET_CATEGORIES = "api/SET_CATEGORIES";
export const SET_PRODUCTS = "api/SET_PRODUCTS";

const initialState = {
  categories: [],
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case GET_REQUESTED:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export const setCategories = () => {
  return dispatch => {
    dispatch({
      type: GET_REQUESTED
    });
    return fetch("http://localhost:5000/categories")
      .then(response => response.json())
      .then(results =>
        dispatch({
          type: SET_CATEGORIES,
          payload: results
        })
      )
      .catch(err => {
        console.log("responce error");
      });
  };
};
export const setProdusts = () => {
  return dispatch => {
    dispatch({
      type: GET_REQUESTED
    });
    return fetch("http://localhost:5000/products")
      .then(response => {
        return response.json();
      })
      .then(results =>
        dispatch({
          type: SET_PRODUCTS,
          payload: results
        })
      )
      .catch(err => {
        console.log("responce error");
      });
  };
};
