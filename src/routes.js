import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import ArtistsPage from './components/artists/ArtistsPage';
import ArtistPage from './components/artists/ArtistPage';
import AlbumsPage from './components/artists/AlbumsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArtistsPage} />
    <Route path="artist/:id" component={ArtistPage} />
    <Route path="albums/:id" component={AlbumsPage} />
  </Route>
);
