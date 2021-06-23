import React, { Fragment, useState } from "react";
import Forms from "../../Reusable/Forms";
import Button from "../../Reusable/Button";
import { Link } from "react-router-dom";
import NavBtn from "../../Reusable/NavBtn";
import "../../../Styles/Forms.css";

function HostelDetails() {
  const [address, setAddress] = useState("");

  return (
    <Fragment>
      <div>
        <NavBtn
          cls1="btn active"
          link1="/HostelDetails"
          link2="/Rooms"
          link3="/preview"
          link4="/features"
        />
      </div>
      <form action="" className="forms">
        <h2>Hostel Details</h2>

        <Forms id="Name" type="text" label="Name" />

        <div className="each_div">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <Forms id="Email" type="email" label="Email" />

        <Forms id="Phone" type="tel" label="Phone" />

        <Forms id="ESTB Year" type="number" label="ESTB Year" />

        <Forms id="Floors" type="number" label="Floors" />

        <Link to="/Rooms">
          <Button name="Save & Continue" />
        </Link>
      </form>
    </Fragment>
  );
}

export default HostelDetails;
