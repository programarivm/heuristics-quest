import apiQueryActionTypes from 'constants/apiQueryActionTypes';

const api = (state = {}, action) => {
  switch (action.type) {
    case apiQueryActionTypes.CLICK_ACCEPT:
      return {
        ...state,
        modal: {
          open: false
        },
        loading: false
      };
    case apiQueryActionTypes.CLICK_CANCEL:
      return {
        ...state,
        modal: {
          open: false
        },
        loading: false
      };
    case apiQueryActionTypes.CLICK_QUERY:
      return {
        ...state,
        modal: {
          open: true
        },
        loading: false
      };
    case apiQueryActionTypes.LOADING:
      return {
        ...state,
        modal: {
          open: true
        },
        loading: true
      };
    case apiQueryActionTypes.HTTP_STATUS_200:
      return {
        ...state,
        games: action.payload,
        modal: {
          open: false
        },
        loading: false
      };
    default:
      return {
        ...state,
        games: [],
        modal: {
          open: false
        },
        loading: false
      };
  }
};

export default api;
