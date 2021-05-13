import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const MenuListItem = ({ item, selectItem, selected, isForm }) => {
  console.log(item);
  if (!isForm)
    return (
      <li className="shopsListItem">
        <p>
          {_.startCase(item.name).trim()}, ${item.price}
        </p>
      </li>
    );

  return (
    <li
      className={`
        shopsListItem 
        clickable
        ${selected ? " selected " : ""}
      `}
      onClick={() => selectItem(item)}
    >
      <p>
        {_.startCase(item.name).trim()}, ${item.price}
      </p>
    </li>
  );
};

MenuListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.any,
    price: PropTypes.any,
  }),
};

export default MenuListItem;
