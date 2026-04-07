import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, handleNameOnChange] = useInputField("");
  const [email, handleEmailOnChange] = useInputField("");
  const [password, handlePasswordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={name} type="text" onChange={handleNameOnChange} />
        <br />
        <input type="email" onChange={handleEmailOnChange} name="" />
        <br />
        <input type="password" name="" onChange={handlePasswordOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
