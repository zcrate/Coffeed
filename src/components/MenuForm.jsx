import React, { useState } from "react";
import _ from "lodash";

const MenuForm = ({ saveItem, categories, menuItem }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "food",
  });
  const [isCustom, setIsCustom] = useState(false);

  // const [category, setCategory] = useState("food");

  // const handleCategoryChange = ({ currentTarget: input }) => {
  //   let value = { ...category };
  //   value = input.value;
  //   setCategory(value);

  // };

  const populateForm = () => {
    setData(menuItem);
  };

  if (menuItem) {
    populateForm();
  }

  //populate the form
  //change button text to "update"
  //update item (instead of add)

  const handleChange = (path, value) => {
    const item = { ...data };

    _.set(item, path, value);

    setData(item);
  };

  const doSubmit = (e) => {
    e.preventDefault();

    const selected = menuItem;

    const path = _.lowerCase(data.category);

    saveItem(path, data);
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
                value={!menuItem ? "Add Menu Item" : "Update Menu Item"}
              />
            </div>
          </label>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default MenuForm;
