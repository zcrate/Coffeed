import React, { useState } from "react";
import _ from "lodash";

const MenuForm = ({ addItem }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
  });
  const [category, setCategory] = useState();

  const handleCategoryChange = (e) => {
    const value = e.target.value;

    setCategory(value);
  };

  const handleChange = (path, value) => {
    const item = { ...data };

    _.set(item, path, value);

    setData(item);
  };

  const doSubmit = (e) => {
    e.preventDefault();

    const path = category;

    addItem(path, data);
  };

  return (
    <form onSubmit={doSubmit} className="col">
      <fieldset>
        <legend>Menu</legend>

        <div className="row">
          <label htmlFor="name" className="col">
            Item
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            />
          </label>

          <label htmlFor="price" className="col">
            Price
            <input
              type="number"
              id="price"
              value={data.price}
              onChange={(e) => {
                handleChange("price", e.target.value);
              }}
            />
          </label>
        </div>

        <div className="row">
          <label htmlFor="category" className="col">
            Menu Item Type
            <select
              type="select"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="drinks">Drink</option>
              <option value="foods">Food</option>
            </select>
          </label>

          <label htmlFor="submitMenuItem" className="col">
            <input type="submit" id="submitMenuItem" value="Add Menu Item" />
          </label>
        </div>
      </fieldset>
    </form>
  );
};

export default MenuForm;
