import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as artistsActions from '../../actions/artistsActions';
import * as filterActions from '../../actions/filterActions';
import ItemsList from './ItemsList';
import {browserHistory} from 'react-router';
import TextInput from './../common/TextInput';
import toastr from 'toastr';

class ArtistsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
  }

  componentWillUnmount() {
    this.props.filterActions.filterArtists("");
  }

  onSearchChange(event) {
    this.props.filterActions.filterArtists(event.target.value);
  }

  searchArtist() {
    const {artists} = this.props;
    if(artists.length === 1) {
      browserHistory.push('/artist/' + artists[0].mbid);
    } else if(artists.length > 1) {
      toastr.success('Make search more specific!');
    } else {
      toastr.success('There is no artist with such name.');
    }
  }

  render() {
    const {artists, filter} = this.props;
    return (
      <div>
        <h1>Artists</h1>
        <div className="searchContainer">
          <TextInput name="search" placeholder="Artist name" onChange={this.onSearchChange} />
          <input type="submit"
                  value="Search"
                  className="btn btn-primary searchButton"
                  onClick={this.searchArtist} />
        </div>
        <ItemsList items={artists} />
        {artists.length === 0 && filter && <strong>There is no artist with such name.</strong>}
      </div>
    );
  }
}

ArtistsPage.propTypes = {
  artists: PropTypes.array.isRequired,
  artistsActions: PropTypes.object.isRequired,
  filterActions: PropTypes.object.isRequired,
  filter: PropTypes.string
};

ArtistsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    artists: state.artists.filter(artist => artist.name.includes(state.filter)),
    filter: state.filter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    artistsActions: bindActionCreators(artistsActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);
