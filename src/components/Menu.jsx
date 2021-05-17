import React, { Fragment, useState } from "react";
import _ from "lodash";

import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

const Menu = ({ shopId, menu: data, saveMenu }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const categories =
    shopId === "new"
      ? ["food", "drink"]
      : _.uniq(data.map((item) => item.category));

  const handleSubmit = (value) => {
    const menu = [...data];

    const category = _.lowerCase(value.category);

    if (selectedMenuItem) {
      const index = menu.findIndex((menuItem) => selectedMenuItem === menuItem);
      menu[index] = { ...value };
      setSelectedMenuItem(menu[index]);
    } else {
      menu.push({ ...value });
    }

    saveMenu("menu", menu);
  };

  const selectItem = (item) => {
    item = item !== selectedMenuItem ? item : null;

    setSelectedMenuItem(item);
  };

  return (
    <Fragment>
      <div className="col">
        <MenuForm
          shopId={shopId}
          menu={data}
          submitItem={handleSubmit}
          categories={categories}
          selectedMenuItem={selectedMenuItem}
        />
      </div>

      <div className="col">
        <MenuList
          shopId={shopId}
          menu={data}
          selectItem={selectItem}
          categories={categories}
          selectedMenuItem={selectedMenuItem}
          isForm
        />
      </div>
    </Fragment>
  );
};

export default Menu;
