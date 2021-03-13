// Search cards with API
export const REQUEST_SEARCH_CARDS = "REQUEST_SEARCH_CARDS";
export const RECEIVE_SEARCH_CARDS_SUCCESS = "RECEIVE_SEARCH_CARDS_SUCCESS";
export const RECEIVE_SEARCH_CARDS_FAIL = "RECEIVE_SEARCH_CARDS_FAIL";
export const SET_SEARCH_CARDS = "SET_SEARCH_CARDS";

// Add cards to collection from search
export const CHOOSE_SEARCH_CARDS = "CHOOSE_SEARCH_CARDS"; // equiv to 'checked'
export const ADD_SEARCH_COLLECTION = "ADD_SEARCH_COLLECTION";
export const ADD_SEARCH_COLLECTION_SUCCESS = "ADD_SEARCH_COLLECTION_SUCCESS";
export const ADD_SEARCH_COLLECTION_FAIL = "ADD_SEARCH_COLLECTION_FAIL";

// export const SAVE_PREVIOUS_SEARCHES = "SAVE_PREVIOUS_SEARCHES";
// =============================

// Action Objects
export const requestSearchCards = (searchString) => ({
  type: REQUEST_SEARCH_CARDS,
  payload: searchString,
});
