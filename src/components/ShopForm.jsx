import React, { useState } from "react";
import _ from "lodash";

import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

import { saveShop } from "../fakeBackend/fakeShopsService";

const ShopForm = (props) => {
  const [data, setData] = useState({
    name: "",
    hours: {
      open: "",
      close: "",
    },
    description: "",
    menu: {},
  });
  const [menuCategories, setMenuCategories] = useState(["food", "drinks"]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const editMenuItem = (item) => {
    setSelectedMenuItem(item);
  };

  const handleMenuChange = (category, value) => {
    const categories = [...menuCategories];
    categories.push(category);
    setMenuCategories(_.uniq(categories));

    const shop = { ...data };

    if (!_.get(shop, `menu.${category}`)) {
      _.set(shop, `menu.${category}`, []);
      console.log(shop);
    }

    const menu = _.get(shop, `menu.${category}`);
    menu.push(value);

    setData(shop);
    console.log(data);
  };

  const handleChange = (path, value) => {
    const shop = { ...data };
    _.set(shop, path, value);
    setData(shop);
  };

  const doSubmit = (e) => {
    e.preventDefault();

    const shop = { ...data };

    saveShop(shop);

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
            <legend className="control-group">Description</legend>

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

          <label htmlFor="submit" className="control-label">
            <div className="controls">
              <input type="submit" id="submit" value="Submit Shop" />
            </div>
          </label>
        </form>

        <div className="col">
          <MenuForm
            saveItem={handleMenuChange}
            menu={data.menu}
            categories={menuCategories}
            menuItem={selectedMenuItem}
          />
        </div>

        <div className="col">
          <MenuList menu={data.menu} editItem={editMenuItem} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopForm;
