import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ListItem = ({item}) => {
  return (
    <div className="listItem">
      <Link to={"artist/" + item.mbid}>
        <img src={item.image[2]["#text"]} />
      </Link>
      <div className="itemName">
        <Link to={"artist/" + item.mbid}>{item.name}</Link>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
