import React, { Fragment, useState } from "react";
import Forms from "../Reusable/Forms";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import NavBtn from "../Reusable/NavBtn";
function HostelDetails() {
  const [address, setAddress] = useState("");

  return (
    <Fragment>
      <div>
           
           <NavBtn
           cls1="btn active"
             link1="/UpdateHostelDetails"
             link2="/UpdateRooms"
             link3="/Updatepreview"
             link4="/Updatefeatures"
           />
         </div>
      <form action="">
      <h3>Hostel Details</h3>
      <div>
        <Forms id="Name" type="text" label="Name" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
      </div>
      <div>
        <Forms id="Email" type="email" label="Email" />
        <br />
      </div>
      <div>
        <Forms id="Phone" type="tel" label="Phone" />
        <br />
      </div>
      <div>
        <Forms id="ESTByear" type="number" label="ESTByear" />
        <br />
      </div>
      <div>
        <Forms id="Floors" type="number" label="Floors" />
        <br />
      </div>

      <Link to="/UpdateRooms">
        <Button name="Save & Continue"></Button>
      </Link>
      </form>
    </Fragment>
  );
}

export default HostelDetails;
