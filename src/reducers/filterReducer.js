import * as types from '../actions/actionTypes';

export default function artistsReducer(state = "", action) {
  switch(action.type) {
    case types.FILTER_ARTISTS:
      return action.name;
    default:
      return state;
  }
}
