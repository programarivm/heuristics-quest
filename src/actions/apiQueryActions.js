import games from 'data/1_100.json';
import apiQueryActionTypes from 'constants/apiQueryActionTypes';

export const accept = (data) =>
{
  return dispatch => {
    dispatch({ type: apiQueryActionTypes.LOADING });
    dispatch({
      type: apiQueryActionTypes.HTTP_STATUS_200,
      payload: games
    });
  }
}

export const cancel = () =>
{
  return {
      type: apiQueryActionTypes.CLICK_CANCEL
    }
}

export const query = () =>
{
  return {
      type: apiQueryActionTypes.CLICK_QUERY
    }
}
