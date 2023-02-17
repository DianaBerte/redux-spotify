import { GET_SONGS } from "../Actions";

const initialState = {
  result: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};

export default songReducer;
