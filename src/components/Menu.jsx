import React, { Fragment, useState, useEffect } from "react";
import _ from "lodash";

import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

import { getShop } from "./../services/shopService";
// import { getShop } from "./../fakeBackend/fakeShopsService";

const Menu = ({ shopId, menu: data, saveMenu }) => {
  // const [data, setData] = useState(
  //   []
  //   // shopId === "new" ? [] : [getShop(shopId).menu]
  // );

  // const [menuCategories, setMenuCategories] = useState(["food", "drinks"]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  // useEffect(() => {
  // const fetchData = async () => {

  // const result = await getShop(shopId);
  // const shop = result.data;
  // if (shopId === "new") return null;

  const categories =
    shopId === "new"
      ? ["food", "drink"]
      : _.uniq(data.map((item) => item.category));
  // setMenuCategories(categories);

  //   console.log(categories);
  // };
  // fetchData();
  // }, []);
  console.log(data);
  const handleSubmit = (value) => {
    const menu = [...data];

    const category = _.lowerCase(value.category);

    // const categories = [...menuCategories, category];

    // setMenuCategories(_.uniq(categories));

    if (selectedMenuItem) {
      const index = menu.findIndex((menuItem) => selectedMenuItem === menuItem);
      menu[index] = { ...value };
      setSelectedMenuItem(menu[index]);
    } else {
      menu.push({ ...value });
    }

    // setData(menu);

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
