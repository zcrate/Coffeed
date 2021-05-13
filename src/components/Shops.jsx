import React, { Fragment, useState } from "react";
import ListGroup from "./common/ListGroup";

import {
  getAllShops,
  getOpenStatus,
  timeDisplay,
} from "../fakeBackend/fakeShopsService";

const Shops = () => {
  const [shops] = useState(getAllShops());
  const [sort, setSort] = useState({ path: "name", order: 1 });

  const sortOptions = [
    { path: "name", label: "Name" },
    { path: "openStatus", label: "Open Status" },
  ];

  const listItemAdd = {
    path: "/shops/form/new",
    className: "ListItem container-fluid clickable addShop",
    value: "+",
  };

  const handleSort = (sortBy) => {
    setSort(sortBy);
  };
  console.log(sort);
  return (
    <Fragment>
      <div className="Shops_ListGroup">
        <ListGroup
          data={shops}
          getStatus={getOpenStatus}
          timeDisplay={timeDisplay}
          listItemAdd={listItemAdd}
          sort={sort}
          sortOptions={sortOptions}
          onSort={handleSort}
        />
      </div>
    </Fragment>
  );
};

export default Shops;
