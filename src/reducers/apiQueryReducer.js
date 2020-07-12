import apiQueryActionTypes from 'constants/apiQueryActionTypes';

const api = (state = {}, action) => {
  switch (action.type) {
    case apiQueryActionTypes.CLICK_ACCEPT:
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
    case apiQueryActionTypes.HTTP_STATUS_200:
      return {
        ...state,
        games: action.payload,
        modal: {
          open: false
        }
      };
    default:
      return {
        ...state,
        games: [],
        modal: {
          open: false
        }
      };
  }
};

export default api;
