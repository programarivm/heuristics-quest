import queryActionTypes from 'constants/queryActionTypes';

const query = (state = {}, action) => {
  switch (action.type) {
    case queryActionTypes.CLICK_ACCEPT:
      return {
        ...state,
        games: action.payload,
        modal: {
          open: false
        },
        loading: false
      };
    case queryActionTypes.CLICK_CANCEL:
      return {
        ...state,
        modal: {
          open: false
        },
        loading: false
      };
    case queryActionTypes.CLICK_QUERY:
      return {
        ...state,
        modal: {
          open: true
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

export default query;
