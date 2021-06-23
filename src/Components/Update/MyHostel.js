import React, { Fragment } from "react";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import NavBtn from "../Reusable/NavBtn";
const MyHostel = () => {
  return (
    <Fragment>
      <Link to="/">
        <Button name="My Hostel" disabled="true"></Button>
      </Link>
      <div>
        <h2>Update Hostel</h2>
        <div>
           
          <NavBtn
            link1="/UpdateHostelDetails"
            link2="/UpdateRooms"
            link3="/Updatepreview"
            link4="/Updatefeatures"
          />
        </div>
         

         

        
         
      </div>
    </Fragment>
  );
};

export default MyHostel;
