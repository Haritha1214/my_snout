import React, { Fragment } from "react";
import "../../Styles/Button.css";
 const Button = (props) => {
  return (
    <Fragment>
       
        <button className="btn">{props.name}</button>
       
    </Fragment>
  );
};

export default Button;
