import React from "react";

import Classes from "./inputSection.module.css";

function InputSection(props) {
  return (
    <div className={Classes.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputSection;