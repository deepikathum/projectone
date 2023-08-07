import { ActionTypes } from "../constants/action-types";

const initialState = {
  searchResults: [],
  categories: [],
};

export const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults:payload,
      };
    case ActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};


