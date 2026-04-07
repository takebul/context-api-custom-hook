import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>{name} </h3>
      {name === "Tom Tom" && <Special asset={asset} />}
      {name === "Jo jooo" && <Friend />}
    </div>
  );
};

export default Cousin;
