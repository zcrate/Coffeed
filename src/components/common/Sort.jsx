import React, { Fragment } from "react";

const Sort = ({ sort, sortOptions, onSort }) => {
  const raiseSort = (path) => {
    const sortBy = { ...sort };
    if (sortBy.path === path) {
      sortBy.order = -sortBy.order;
    } else {
      sortBy.path = path;
      sortBy.order = 1;
    }
    onSort(sortBy);
  };

  return (
    <Fragment>
      <div>
        {sortOptions.map((sortOption) => (
          <button
            key={sortOption.path}
            onClick={() => raiseSort(sortOption.path)}
          >
            {sortOption.label}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

export default Sort;
