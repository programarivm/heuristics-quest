import games from 'data/1_100.json';
import apiQueryActionTypes from 'constants/apiQueryActionTypes';

export const accept = () =>
{
  return {
    type: apiQueryActionTypes.CLICK_ACCEPT,
    payload: games
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
