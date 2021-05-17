import React, { useState, useEffect } from "react";
import _ from "lodash";

import MenuList from "./MenuList";

import { getShop } from "./../services/shopService";

const Shop = (props) => {
  const [shop, setShop] = useState(null);

  const shopId = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getShop(shopId);
      setShop(data);
    };
    fetchData();
  }, []);

  if (shop === null) return null;

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
