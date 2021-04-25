import games from 'data/01_draw.json';
import queryActionTypes from 'constants/queryActionTypes';

export const accept = () =>
{
  return {
    type: queryActionTypes.CLICK_ACCEPT,
    payload: games
  }
}

export const cancel = () =>
{
  return {
    type: queryActionTypes.CLICK_CANCEL
  }
}

export const query = () =>
{
  return {
    type: queryActionTypes.CLICK_QUERY
  }
}
