import queryActionTypes from 'constants/queryActionTypes';

export const accept = (data) =>
{
  let result = null;
  switch (data.result) {
    case '0-1':
      result = 'win';
      break;
    case '1-0':
      result = 'lose';
      break;
    default:
      result = 'draw';
      break;
  }

  return {
    type: queryActionTypes.CLICK_ACCEPT,
    payload: require(`data/${data.dataset}_${result}.json`)
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
