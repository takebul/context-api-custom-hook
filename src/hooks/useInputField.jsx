import { useState } from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFiledValue] = useState(defaultValue);

  const handleFieldOnChange = (e) => {
    setFiledValue(e.target.value);
  };

  return [fieldValue, handleFieldOnChange];
};

export default useInputField;
