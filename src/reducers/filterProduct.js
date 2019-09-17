export const SET_PRODUCT_FILTER = "api/SET_PRODUCT_FILTER";

const initialState = {
  filterID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_FILTER:
      return {
        ...state,
        filterID: action.payload
      };

    default:
      return state;
  }
};

export const setFilterId = id => {
  return (dispatch, getState) => {
    const filterID = getState().filter.filterID === id ? "" : id;
    dispatch({
      type: SET_PRODUCT_FILTER,
      payload: filterID
    });
  };
};
