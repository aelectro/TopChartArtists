import * as types from './actionTypes';

export function filterArtists(name) {
  return {type: types.FILTER_ARTISTS, name};
}
