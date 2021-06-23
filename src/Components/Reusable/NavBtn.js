import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Button.css";
import "../../Styles/Forms.css";

 const NavBtn = (props ) => {
  return (
    <Fragment >
      <div className="navbtn">
        <Link to={props.link1}>
        <button   className={(props.cls1)|| "btn"} >Hostel Details</button>
        </Link>
        <Link to={props.link2}>
        <button   className={(props.cls2)|| "btn"} >Rooms Available</button>
        </Link>
        <Link to={props.link3}>
        <button   className={(props.cls3)|| "btn"}  >Photos</button>
        </Link>
        <Link to={props.link4}>
        <button   className={(props.cls4)|| "btn"}  >Features Available</button>
        </Link>
        </div>
    </Fragment>
  );
};

export default NavBtn;
