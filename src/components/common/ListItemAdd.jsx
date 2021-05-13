import React from "react";
import { Link } from "react-router-dom";

const ListItemAdd = ({ data }) => {
  if (!data) return null;

  return (
    <Link to={data.path} className={data.className}>
      <h1>{data.value}</h1>
    </Link>
  );
};

export default ListItemAdd;
