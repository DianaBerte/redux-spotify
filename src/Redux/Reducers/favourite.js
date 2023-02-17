import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../Actions";

const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
