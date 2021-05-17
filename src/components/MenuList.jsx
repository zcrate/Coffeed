import React from "react";
import _ from "lodash";
import MenuListItem from "./MenuListItem";

const MenuList = ({
  menu,
  categories,
  selectItem,
  selectedMenuItem,
  isForm,
}) => {
  let groups = categories.map((category) => {
    return {
      name: category,
      list: menu.filter((item) => item.category === category),
    };
  });

  groups = groups.filter((o) => {
    return o.list.length > 0;
  });

  return (
    <ul className="col">
      {groups.map((category, index) => (
        <li key={category.name + index}>
          <h3>{_.startCase(category.name).trim()}</h3>

          <ul>
            {category.list.map((item, index) => (
              <MenuListItem
                key={item.name + index}
                item={item}
                selectItem={selectItem}
                selected={item === selectedMenuItem}
                isForm={isForm}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
