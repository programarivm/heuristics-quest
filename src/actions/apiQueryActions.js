import axios from 'axios';
import apiQueryActionTypes from 'constants/apiQueryActionTypes';

export const accept = (data) =>
{
  return dispatch => {
    axios.post(process.env.REACT_APP_URL + `/api/query`, data)
			.then((res) => {
        dispatch({
          type: apiQueryActionTypes.HTTP_STATUS_200,
          payload: res.data
        });
			})
			.catch(error => {
        dispatch({
          type: apiQueryActionTypes.HTTP_STATUS_500,
          message: "Whoops! Something went wrong, please try again later."
        });
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
