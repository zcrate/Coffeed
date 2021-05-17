import React, { Fragment, useState, useEffect } from "react";
import _ from "lodash";
import ListGroup from "./common/ListGroup";

import { getShops } from "../services/shopService";

import { getOpenStatus, timeDisplay } from "../shopUtils";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [sort, setSort] = useState({ path: "name", order: 1 });

  useEffect(() => {
    const fetchData = async () => {
      const allShops = await getShops();
      setShops(allShops.data);
    };
    fetchData();
  }, []);

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
    setSort({ ...sortBy });
  };

  let filtered = shops;

  let sorted = shops;

  if (sort.path === "openStatus") {
    sorted = shops.sort((a, b) => {
      let result =
        getOpenStatus(a) !== getOpenStatus(b) && getOpenStatus(a) ? 1 : -1;
      if (sort.order === -1) result *= -1;
      return result;
    });
  } else {
    sorted = _.orderBy(
      filtered,
      [sort.path],
      [sort.order === 1 ? "asc" : "desc"]
    );
  }

  return (
    <Fragment>
      <div className="Shops_ListGroup">
        <ListGroup
          data={sorted}
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
