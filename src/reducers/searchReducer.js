import * as types from '../actions/actionTypes';

export default function searchReducer(state = {}, action) {
  switch(action.type) {
    case types.SEARCH_ARTIST_SUCCESS:
      return action.artist;
    default:
      return state;
  }
}
