import React, { useState } from "react";

const CustomerForm = ({ handleAddCustomer }) => {
  const [error, setError] = useState("");
  const handleCustomerSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setError("Please provide a Name");
      return;
    } else if (price.length === 0) {
      setError("Please provide your Price");
      return;
    } else if (price < 0) {
      setError("Price can not be negative");
      return;
    } else if (quantity.length === 0) {
      setError("Please provide your Quantity");
      return;
    } else if (quantity < 0) {
      setError("Quantity can not be negative");
      return;
    } else {
      setError("");
    }

    const addCustomer = {
      name,
      price,
      quantity,
    };

    handleAddCustomer(addCustomer);
  };

  return (
    <div>
      <form onSubmit={handleCustomerSubmit}>
        <input type="text" name="name" placeholder="Customer Name" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default CustomerForm;
