import React, { Fragment, useState } from "react";
import _ from "lodash";

import MenuItem from "./MenuItem";

const MenuList = ({ menu, editItem }) => {
  const menuTypes = Object.keys(menu);

  return (
    <ul className="col">
      {menuTypes.map((menuType, index) => (
        <li key={index}>
          <h2>{menuType}</h2>
          <ul>
            {menu[menuType].map((item, index) => (
              <MenuItem key={index} item={item} editItem={editItem} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
