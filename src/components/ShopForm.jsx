import React, { useState } from "react";
import MenuForm from "./MenuForm";

const ShopForm = ({ addShop }) => {
  const [data, setData] = useState({
    name: "",
    hours: {
      openTime: "",
      closeTime: "",
    },
    menu: [
      {
        drinks: [
          {
            item: "",
            price: 0,
          },
        ],
      },
      {
        foods: [
          {
            item: "",
            price: 0,
          },
        ],
      },
    ],
    description: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const currentValue = e.target.value;
    setData(currentValue);
  };

  const addMenuItem = (item) => {
    const menu = [...data.menu];
    menu.push(item);
    setData(menu);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    addShop(data);
  };

  return (
    <React.Fragment>
      <form onSubmit={doSubmit}>
        <fieldset>
          <legend>
            <label htmlFor="name">Shop Name</label>
          </legend>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Hours</legend>
          <label htmlFor="open">Open</label>
          <input
            type="text"
            id="open"
            value={data.hours.open}
            onChange={handleChange}
          />

          <label htmlFor="close">
            Close
            <input
              type="time"
              id="close"
              value={data.hours.close}
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </form>

      <MenuForm addMenuItem={addMenuItem} />

      <div>
        {data.menu.drinks
          ? data.menu.drinks.map((d) => (
              <p>
                {`Drink: ${d.item}`}
                <br />
                {`Price: ${d.price}`}
              </p>
            ))
          : console.log(data)}
      </div>
    </React.Fragment>
  );
};

export default ShopForm;
