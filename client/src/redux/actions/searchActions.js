
import { ActionTypes } from '../constants/action-types';

export const setSearchResults = (searchResults) => ({
  type: ActionTypes.SET_SEARCH_RESULTS,
  payload: searchResults,
});

export const setCategories = (categories) => ({
  type: ActionTypes.SET_CATEGORIES,
  payload: categories,
});
