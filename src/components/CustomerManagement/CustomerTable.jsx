import React from "react";

const CustomerTable = ({ customer }) => {
  return (
    <div>
      <h3>Customer Table: {customer.length} </h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((c, index) => (
            <tr key={index}>
              <td>{index + 1} </td>
              <td>{c.name} </td>
              <td>{c.price} </td>
              <td>{c.quantity} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
