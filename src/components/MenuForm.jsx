import React, { useState, useEffect } from "react";
import _ from "lodash";

import { getShop } from "./../fakeBackend/fakeShopsService";

const MenuForm = ({ shopId, submitItem, categories, selectedMenuItem }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: categories[0],
  });
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      if (!selectedMenuItem) return;

      setData(selectedMenuItem);
    };
    fetchData();
  }, []);

  const handleChange = (path, value) => {
    const item = { ...data };

    _.set(item, path, value);

    setData(item);
  };

  const doSubmit = (e) => {
    e.preventDefault();

    data.category = _.lowerCase(data.category);
    console.log(data);
    submitItem(data);
  };

  return (
    <React.Fragment>
      <form onSubmit={doSubmit} className="form-horizontal">
        <fieldset className="control-group">
          <legend>Menu</legend>

          <label htmlFor="category" className="control-label col">
            Item Type
            <div className="controls">
              {!isCustom ? (
                <select
                  type="select"
                  id="category"
                  value={data.category}
                  onChange={(e) => {
                    handleChange("category", e.target.value);
                  }}
                >
                  {categories.map((c, index) => {
                    return (
                      <option key={c + index} value={c}>
                        {_.startCase(c).trim()}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input
                  type="text"
                  id="category"
                  value={data.category}
                  onChange={(e) => {
                    handleChange("category", e.target.value);
                  }}
                />
              )}
              <label htmlFor="customCheckbox" className="control-label">
                <input
                  type="checkbox"
                  id="customCheckbox"
                  onChange={() => setIsCustom(!isCustom)}
                />
                Custom
              </label>
            </div>
          </label>

          <label htmlFor="name" className="control-label col">
            Item
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

          <label htmlFor="price" className="control-label col">
            Price
            <div className="controls">
              <input
                type="number"
                id="price"
                value={data.price}
                onChange={(e) => {
                  handleChange("price", e.target.value);
                }}
              />
            </div>
          </label>

          <label htmlFor="submitMenuItem" className="control-label col">
            <div className="controls">
              <input
                type="submit"
                id="submitMenuItem"
                value={!selectedMenuItem ? "Add Menu Item" : "Update Menu Item"}
              />
            </div>
          </label>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default MenuForm;
