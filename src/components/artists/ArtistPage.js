import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as artistsActions from '../../actions/artistsActions';
import LoadingDots from './../common/LoadingDots';
import {Link} from 'react-router';

class ArtistPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.artistsActions.searchArtist(id);
  }

  render() {
    const {artist, loading, params} = this.props;
    const artistInfo = artist.name && artist.mbid === this.props.params.id ?
                                <div className="artistContainer">
                                  <img className="artistPhoto" src={artist.image[3]["#text"]} />
                                  <div>
                                    <h1>{artist.name}</h1>
                                    <article dangerouslySetInnerHTML={{__html: artist.bio.summary}}></article>
                                    <Link to={"/albums/" + params.id} className="btn btn-primary albumsButton">See albums</Link>
                                  </div>
                                </div>
                                : loading && <LoadingDots interval={100} dots={20} />;
    return (
      artistInfo
    );
  }
}

ArtistPage.propTypes = {
  artist: PropTypes.object.isRequired,
  artistsActions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    artist: state.artist,
    loading: state.ajaxCallsInProgress > 0
  };
}
function mapDispatchToProps(dispatch) {
  return {
    artistsActions: bindActionCreators(artistsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
