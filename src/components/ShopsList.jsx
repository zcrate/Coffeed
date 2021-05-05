import React from "react";
import PropTypes from "prop-types";
import SortForm from "./SortForm";
import Shop from "./Shop";

const ShopsList = ({ shops }) => {
  return (
    <React.Fragment>
      <SortForm classname="row" />

      <ul className="shopsList col">
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
    </React.Fragment>
  );
};

ShopsList.propTypes = {
  shops: PropTypes.array,
};

export default ShopsList;
