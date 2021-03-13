import {
  REQUEST_SEARCH_CARDS,
  RECEIVE_SEARCH_CARDS_FAIL,
  RECEIVE_SEARCH_CARDS_SUCCESS,
} from "./actions";

const initialState = {
  searchCards: [],
  selectedSearchCards: [],
  error: null,
  isFetching: false,
  prevSearches: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SEARCH_CARDS:
      console.log('reducer', action.payload)
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SEARCH_CARDS_FAIL:
      console.log(action.payload)
      return { ...state, isFetching: false, error: action.payload };
    case RECEIVE_SEARCH_CARDS_SUCCESS:
      console.log(action.payload);
      return { ...state, isFetching: false, searchCards: action.payload };
    default:
      return state;
  }
}
