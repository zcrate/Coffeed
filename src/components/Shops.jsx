import React, { Fragment, useState } from "react";
import ShopsList from "./ShopsList";

import { getAllShops } from "../fakeBackend/fakeShopsService";

const Shops = () => {
  const [shops, setShops] = useState(getAllShops());

  return (
    <Fragment>
      <ShopsList shops={shops} />
    </Fragment>
  );
};

export default Shops;
