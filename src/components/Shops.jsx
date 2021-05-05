import React, { Fragment, useState } from "react";
import ShopsList from "./ShopsList";

import { getAllShops } from "../fakeBackend/fakeShopsService";

const Shops = () => {
  const [shops] = useState(getAllShops());

  return (
    <Fragment>
      {/* <SortForm classname="row" /> */}
      <ShopsList shops={shops} />
    </Fragment>
  );
};

export default Shops;
