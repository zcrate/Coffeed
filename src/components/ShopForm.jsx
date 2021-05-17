import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import _ from "lodash";

import Menu from "./Menu";

import { getShop, saveShop } from "../services/shopService";

const ShopForm = (props) => {
  const [data, setData] = useState({
    name: "",
    hours: {
      open: "",
      close: "",
    },
    description: "",
    menu: [],
  });

  const shopId = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      if (shopId === "new") return;

      const { data } = await getShop(shopId);
      setData(data);
    };
    fetchData();
  }, []);

  const handleChange = (path, value) => {
    const shop = { ...data };
    _.set(shop, path, value);
    setData(shop);
  };

  const doSubmit = async (e) => {
    e.preventDefault();

    const shop = { ...data };
    await saveShop(shop);

    props.history.push("/shops");
  };

  return (
    <React.Fragment>
      <div className="shopFormPage row d-flex justify-content-md-center">
        <form onSubmit={doSubmit} className="form-horizontal col ">
          <fieldset className="control-group">
            <legend>Shop Name</legend>

            <label htmlFor="name" className="control-label col">
              <div className="controls">
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                />
              </div>
            </label>
          </fieldset>

          <fieldset className="control-group">
            <legend>Hours</legend>

            <label htmlFor="open" className="control-label col">
              Open
              <div className="controls">
                <input
                  type="time"
                  id="open"
                  value={data.hours.open}
                  onChange={(e) => {
                    handleChange("hours.open", e.target.value);
                  }}
                />
              </div>
            </label>

            <label htmlFor="close" className="control-label col">
              Close{" "}
              <div className="controls">
                <input
                  type="time"
                  id="close"
                  value={data.hours.close}
                  onChange={(e) => {
                    handleChange("hours.close", e.target.value);
                  }}
                />
              </div>
            </label>
          </fieldset>

          <fieldset>
            <legend>Description</legend>

            <label htmlFor="description" className="control-label col">
              <div className="controls">
                <input
                  type="text"
                  id="description"
                  value={data.description}
                  onChange={(e) => {
                    handleChange("description", e.target.value);
                  }}
                />
              </div>
            </label>
          </fieldset>

          <fieldset className="control-group">
            <label htmlFor="submit" className="control-label">
              <div className="controls">
                <input type="submit" id="submit" value="Submit Shop" />
              </div>
            </label>
          </fieldset>
        </form>

        <Menu
          shopId={props.match.params.id}
          menu={data.menu}
          saveMenu={handleChange}
        />
      </div>
    </React.Fragment>
  );
};

ShopForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default ShopForm;
