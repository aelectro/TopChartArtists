import React, {PropTypes} from 'react';
import ListItem from './ListItem';

const ItemsList = ({items}) => {
  return (
    <div className="itemsGrid">
      {items.map(item => <ListItem key={item.playcount} item={item} />)}
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
