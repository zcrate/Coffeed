import React, { useState } from "react";

const MenuForm = ({ addMenuItem }) => {
  const [menuItem, setMenuItem] = useState();

  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleChange = (e) => {
    let currentValue = e.target.value;
    setMenuItem(currentValue);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    addMenuItem();
  };

  return (
    <form onSubmit={doSubmit}>
      <fieldset>
        <legend>Menu</legend>

        <label htmlFor="category" />
        <select
          type="select"
          id="category"
          name="category"
          onChange={handleCategoryChange}
        >
          <option value="drinks">Drink</option>
          <option value="foods">Food</option>
        </select>

        <label htmlFor="item">
          Item
          <input type="text" id="item" onChange={handleChange} />
        </label>

        <label htmlFor="price">
          Price
          <input type="number" id="price" />
        </label>

        <label htmlFor="addMenuItem">
          <input type="submit" id="addMenuItem" value="Add Menu Item" />
        </label>
      </fieldset>
    </form>
  );
};

export default MenuForm;
