import {combineReducers} from 'redux';
import artists from './artistsReducer';
import albums from './albumsReducer';
import artist from './searchReducer';
import filter from './filterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  artists,
  ajaxCallsInProgress,
  filter,
  artist,
  albums
});

export default rootReducer;
