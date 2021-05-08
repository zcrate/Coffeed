import React from "react";
import PropTypes from "prop-types";
import Shop from "./Shop";
import { Link } from "react-router-dom";

const ShopsList = ({ shops }) => {
  return (
    <ul className="shopsList">
      <Link
        to="/shops/new"
        className="
            shopsListItem
            container-fluid
            clickable
            addShop"
      >
        <h1>+</h1>
      </Link>

      {shops.map((s) => (
        <Shop
          key={s._id}
          id={s._id}
          name={s.name}
          descr={s.description}
          hours={s.hours}
        />
      ))}
    </ul>
  );
};

ShopsList.propTypes = {
  shops: PropTypes.array,
};

export default ShopsList;
