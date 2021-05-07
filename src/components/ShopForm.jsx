import React, { useState } from "react";
import _ from "lodash";
import MenuForm from "./MenuForm";
import MenuDisplay from "./MenuDisplay";

const ShopForm = ({ addShop }) => {
  const [data, setData] = useState({
    name: "",
    hours: {
      open: "",
      close: "",
    },
    menu: {
      foods: [],
      drinks: [],
    },
    description: "",
  });

  const handleChange = (path, value) => {
    const shop = { ...data };

    _.set(shop, path, value);

    setData(shop);
  };

  const handleMenuChange = (path, value, category) => {
    const shop = { ...data };

    const menu = _.get(shop, `menu.${path}`);

    menu.push(value);

    setData(shop);
    console.log(data);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    addShop(data);
  };

  return (
    <div className="col">
      <form onSubmit={doSubmit} className="col">
        <div className="row">
          <div className="col">
            <fieldset>
              <legend>Shop Name </legend>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                />
              </label>
            </fieldset>
          </div>

          <div className="col">
            <fieldset>
              <legend>Hours </legend>

              <label htmlFor="open" className="col">
                Open
                <input
                  type="time"
                  id="open"
                  value={data.hours.open}
                  onChange={(e) => {
                    handleChange("hours.open", e.target.value);
                  }}
                />
              </label>

              <label htmlFor="close" className="col">
                Close
                <input
                  type="time"
                  id="close"
                  value={data.hours.close}
                  onChange={(e) => {
                    handleChange("hours.close", e.target.value);
                  }}
                />
              </label>
            </fieldset>
          </div>
        </div>
      </form>

      <div>
        <MenuForm addItem={handleMenuChange} menu={data.menu} />

        <MenuDisplay menu={data.menu} />
      </div>
    </div>
  );
};

export default ShopForm;
