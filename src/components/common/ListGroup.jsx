import React, { Fragment } from "react";

import Sort from "./Sort";
import ListItemAdd from "./ListItemAdd";
import ListItem from "./ListItem";

const ListGroup = ({
  data,
  getStatus,
  timeDisplay,
  listItemAdd,
  sort,
  sortOptions,
  onSort,
}) => {
  return (
    <Fragment>
      <Sort sort={sort} sortOptions={sortOptions} onSort={onSort} />

      <ul className="shopsList">
        <ListItemAdd data={listItemAdd} />

        {data.map((item) => (
          <ListItem
            key={item.name}
            item={item}
            getStatus={getStatus}
            timeDisplay={timeDisplay}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
