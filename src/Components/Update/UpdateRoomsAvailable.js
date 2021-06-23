import React, { Fragment } from "react";
import Forms from "../Reusable/Forms";
import Button from "../Reusable/Button";
import NavBtn from "../Reusable/NavBtn";
import { Link } from "react-router-dom";

const RoomsAvailable = () => {
  return (
    <Fragment>
      <div>
        <NavBtn
          cls2="btn active"
          link1="/UpdateHostelDetails"
          link2="/UpdateRooms"
          link3="/Updatepreview"
          link4="/Updatefeatures"
        />
      </div>
      <form action="">
        <h3>Hostel Room Details</h3>

        <div>
          <Forms
            id="No Of People Per Room"
            type="text"
            label="No Of People Per Room"
          />
          <Forms id="No Of Washrooms" type="number" label="No Of Washrooms" />
          <Forms id="Room Type" type="text" label="Room Type" />
          <Forms id="Price" type="number" label="Price" />
          <Forms id="Room Size" type="text" label="Room Size" />
          <Forms id="No Of Floors" type="number" label="No Of Floors" />
          <Button name="Add Another Room"></Button>
          <Link to="/Updatepreview">
            <Button name="Save & Continue"></Button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default RoomsAvailable;
