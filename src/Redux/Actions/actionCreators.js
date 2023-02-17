import { ADD_TO_FAV, REMOVE_FROM_FAV, GET_SONGS } from ".";

export const removeFromFavourites = (payload) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: payload,
  };
};

export const addToFavourites = (payload) => {
  return {
    type: ADD_TO_FAV,
    payload: payload,
  };
};

export const getSongs = (payload) => {
  return {
    type: GET_SONGS,
    payload: payload,
  };
};

export const fetchSongs = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(getSongs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
