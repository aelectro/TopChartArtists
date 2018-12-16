import ArtistsApi from '../api/artistsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadArtistsSuccess(artists) {
  return {type: types.LOAD_ARTISTS_SUCCESS, artists};
}

export function loadAlbumsSuccess(albums) {
  return {type: types.LOAD_ALBUMS_SUCCESS, albums};
}

export function searchArtistSuccess(artist) {
  return {type: types.SEARCH_ARTIST_SUCCESS, artist};
}

export function loadArtists() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ArtistsApi.getTopArtists().then(artists => {
      return artists.json();
    }).then(json => {
      dispatch(loadArtistsSuccess(json.artists.artist));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAlbums(mbid, limit) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ArtistsApi.getTopAlbums(mbid, limit).then(albums => {
      return albums.json();
    }).then(json => {
      dispatch(loadAlbumsSuccess(json.topalbums.album));
    }).catch(error => {
      throw(error);
    });
  };
}

export function searchArtist(mbid) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ArtistsApi.searchArtist(mbid).then(artist => {
      return artist.json();
    }).then(json => {
      dispatch(searchArtistSuccess(json.artist));
    }).catch(error => {
      throw(error);
    });
  };
}
