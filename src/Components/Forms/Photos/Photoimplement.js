import React, { Component, Fragment } from "react";
import Photoss from "./PhotoContainer";
import Button from "../../Reusable/Button";
import NavBtn from "../../Reusable/NavBtn"

import { Link } from "react-router-dom";

export class Photoimplement extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <NavBtn cls3="btn active" link1="/HostelDetails" link2="/Rooms" link3="/preview" link4="/features"/>

        </div>
         <form action="" className="forms">
        <h2>Photos</h2>
        <h2>Hostel Pics</h2>
        <Photoss />
        <h2>Kitchen Pics</h2>
        <Photoss />
        <h2>Menu Pics</h2>
        <Photoss />
        <Link to="/features">
          <Button name="Save & Continue"></Button>
        </Link>
        </form>
      </Fragment>
    );
  }
}

export default Photoimplement;
