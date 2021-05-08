import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ item, editItem }) => {
  return (
    <li
      className="
        shopsListItem 
        container-fluid 
        clickable
        "
      onClick={() => editItem(item)}
    >
      <p>
        {item.name}, ${item.price}
      </p>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.any,
    price: PropTypes.any,
  }),
};

export default MenuItem;
