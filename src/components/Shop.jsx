import React from "react";
import _ from "lodash";

import MenuList from "./MenuList";

// import { getShop } from "./../services/shopService";
import { getShop } from "./../fakeBackend/fakeShopsService";

const Shop = (props) => {
  const shopId = props.match.params.id;
  const shop = getShop(shopId);

  const categories = _.uniq(shop.menu.map((item) => item.category));

  return (
    <div className="col">
      <h4 className="row">{shop.name}</h4>
      <div className="row">
        <MenuList
          shopId={shopId}
          menu={shop.menu}
          categories={categories}
          selectItem={null}
          selectedMenuItem={null}
        />
      </div>
    </div>
  );
};

export default Shop;
