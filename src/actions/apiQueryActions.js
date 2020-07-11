import apiQueryActionTypes from 'constants/apiQueryActionTypes';

export const accept = (data) =>
{
  return {
      type: apiQueryActionTypes.CLICK_ACCEPT,
      payload: data
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
