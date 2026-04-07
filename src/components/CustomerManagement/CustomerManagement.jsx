import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerTable from "./CustomerTable";

const CustomerManagement = () => {
  const [customer, setCustomer] = useState([]);

  const handleAddCustomer = (defaultCustomer) => {
    const newCustomer = [...customer, defaultCustomer];
    setCustomer(newCustomer);
  };

  return (
    <div>
      <h2>Customer Management</h2>
      <CustomerForm handleAddCustomer={handleAddCustomer} />
      <CustomerTable customer={customer} />
    </div>
  );
};

export default CustomerManagement;
