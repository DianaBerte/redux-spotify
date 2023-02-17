export const GET_SONGS = "GET_SONGS";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

//https://striveschool-api.herokuapp.com/api/deezer/search?q={query}

const baseEndpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const addToFavouriteAction = (song) => ({
  type: ADD_TO_FAV,
  payload: song,
});

export const removeFromFavouriteAction = (song) => ({
  type: REMOVE_FROM_FAV,
  payload: song,
});

export const getSongsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        alert("Error fetching results :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
