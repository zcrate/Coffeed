import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, getStatus, timeDisplay }) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchStatus = () => {
      setStatus(getStatus(item._id));
    };

    fetchStatus();
  }, []);

  return (
    <React.Fragment>
      <div
        className={`
          listItem
          container-fluid
          ${status ? "shopOpen" : "shopClosed"}
        `}
      >
        <div className="row">
          <h4 className="itemName">{item.name}</h4>
        </div>

        <div className="row">
          <p className="col itemStatus">
            {`Hours: ${timeDisplay(item.hours.open)} - ${timeDisplay(
              item.hours.close
            )}`}
            {"  "}
            {status ? (
              <span className="badge badge-pill badge-success">Open Now</span>
            ) : (
              <span className="badge badge-pill badge-danger">Closed</span>
            )}
          </p>
        </div>

        <div className=" itemDescription">
          <p>{`Description: ${item.description}`}</p>
        </div>

        <div className="row float-right">
          <Link to={`/shops/form/${item._id}`}>
            <span className="badge badge-pill badge-secondary listItemLink">
              Edit Shop
            </span>
          </Link>

          <Link to={`shops/${item._id}`}>
            <span className="badge badge-pill badge-secondary listItemLink">
              See Menu
            </span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListItem;
