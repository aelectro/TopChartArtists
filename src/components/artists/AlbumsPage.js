import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as artistsActions from '../../actions/artistsActions';
import ItemsList from './ItemsList';
import SelectInput from '../common/SelectInput';

class AlbumsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      albums: [...this.props.albums],
      albumsLimit: "10"
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.artistsActions.loadAlbums(id);
  }

  componentWillReceiveProps(props) {
    this.setState({albums: [...props.albums]});
}

  onFilterChange(event) {
    const {id} = this.props.params;
    this.props.artistsActions.loadAlbums(id, event.target.value);
    this.setState({albumsLimit: event.target.value});
  }

  render() {
    const {albums} = this.props;
    const options = [{value: 10, text: 10}, {value: 15, text: 15}, {value: 20, text: 20}];
    return (
      <div>
        <h1>{albums.length > 0 && albums[0].artist.name + "'s "}Albums</h1>

        <SelectInput
        name="filter"
        label="Albums shown:"
        value={this.state.albumsLimit}
        options={options}
        customClass="albumsFilter"
        onChange={this.onFilterChange}/>

        <ItemsList items={albums} />
      </div>
    );
  }
}

AlbumsPage.propTypes = {
  albums: PropTypes.array.isRequired,
  artistsActions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

AlbumsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    albums: state.albums
  };
}
function mapDispatchToProps(dispatch) {
  return {
    artistsActions: bindActionCreators(artistsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
