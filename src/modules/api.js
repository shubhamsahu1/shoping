export const GET_CATEGORIES_REQUESTED = 'api/GET_CATEGORIES_REQUESTED'
export const SET_CATEGORIES = 'api/SET_CATEGORIES'
const initialState = {
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      case  GET_CATEGORIES_REQUESTED:
        return {
          ...state,
          loading: true
        }
    default:
      return state
  }
}

export const setCategories = () => {
  return dispatch => {
    dispatch({
      type: GET_CATEGORIES_REQUESTED
    })
    return fetch("http://localhost:5000/categories")
    .then(response => response.json())
    .then(results => 
      dispatch({
        type: SET_CATEGORIES,
        payload: results
      }))
    .catch(err => {
      console.log("responce error");
    });
  }
}
