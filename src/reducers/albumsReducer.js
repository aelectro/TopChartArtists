import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function albumsReducer(state = initialState.artists, action) {
  switch(action.type) {
    case types.LOAD_ALBUMS_SUCCESS:
      return [...action.albums];
    default:
      return state;
  }
}
