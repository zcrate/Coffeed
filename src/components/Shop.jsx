import React, { useState } from "react";
import PropTypes from "prop-types";

import { getOpenStatus, timeDisplay } from "../fakeBackend/fakeShopsService";

const Shop = ({ id, name, descr, hours }) => {
  const [openStatus, setOpenStatus] = useState(getOpenStatus(id));

  return (
    <li
      className={`
        shopsListItem 
        container-fluid 
        clickable 
        ${openStatus ? "shopOpen" : ""}
      `}
      onClick={() => console.log(name)}
    >
      <div className="row">
        <h4 className="col-lg itemName">{name}</h4>

        <p className="col itemStatus">
          {`Hours: ${timeDisplay(hours.open)} - ${timeDisplay(hours.close)}`}
          <br />
          {openStatus ? "Open Now" : "Closed"}
        </p>
      </div>

      <div className=" itemDescription">
        <p>{`Description: ${descr}`}</p>
      </div>
    </li>
  );
};

Shop.propTypes = {};

export default Shop;
