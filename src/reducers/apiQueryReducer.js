import apiQueryActionTypes from 'constants/apiQueryActionTypes';

const api = (state = {}, action) => {
  switch (action.type) {
    case apiQueryActionTypes.CLICK_ACCEPT:
      // TODO: run query
      return {
        ...state,
        modal: {
          open: false
        }
      };
    case apiQueryActionTypes.CLICK_CANCEL:
      return {
        ...state,
        modal: {
          open: false
        }
      };
    case apiQueryActionTypes.CLICK_QUERY:
      return {
        ...state,
        modal: {
          open: true
        }
      };
    default:
      return {
        ...state,
        modal: {
          open: false
        }
      };
  }
};

export default api;
