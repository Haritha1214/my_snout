import React, { Fragment } from "react";
import Forms from "../../Reusable/Forms";
import Button from "../../Reusable/Button";
import NavBtn from "../../Reusable/NavBtn";
import NavBar from "../../Reusable/NavBar";
import { Link } from "react-router-dom";
import "../../../Styles/Forms.css";

const RoomsAvailable = () => {
  return (
    <Fragment>
      <div>
        <NavBar />
      </div>
      <div  >
        <NavBtn
          cls2="btn active"
          link1="/HostelDetails"
          link2="/Rooms"
          link3="/preview"
          link4="/features"
        />
      </div>

      <form action="" className="forms">
        <h2>Hostel Room Details</h2>
        <div>
          <Forms
            id="No Of People Per Room"
            type="number"
            label="No Of People Per Room"
          />
          <Forms id="No Of Washrooms" type="number" label="No Of Washrooms" />
          <Forms id="Room Type" type="text" label="Room Type" />
          <Forms id="Price" type="number" label="Price" />
          <Forms id="Room Size" type="text" label="Room Size" />
          <Forms id="No Of Floors" type="number" label="No Of Floors" />
          <Button name="Add Another Room"></Button>
          <Link to="/preview">
            <Button name="Save & Continue"></Button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default RoomsAvailable;
