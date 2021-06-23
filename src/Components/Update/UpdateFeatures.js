import React, { Fragment,useState } from "react";
import Forms from "../Reusable/Forms";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import NavBtn from "../Reusable/NavBtn";
const Features = () => {
  const [Facilities, setFacilities]=useState('')


  return (
    <Fragment>
      <div>
           
           <NavBtn
           cls4="btn active"
             link1="/UpdateHostelDetails"
             link2="/UpdateRooms"
             link3="/Updatepreview"
             link4="/Updatefeatures"
           />
         </div>
      <form action="">
      <h3>Features Available</h3>
        <div>
          <h3>Ammenties</h3>
          <div >
            <Forms  id="Tv" type="checkbox" label="Tv"/>         
            <Forms id="Ro Water" type="checkbox" label="Ro Water"/>          
            <Forms id="Matress"type="checkbox" label="Matress" />
            <Forms id="Fridge"type="checkbox" label="Fridge" />
            <Forms id="Washing Machine"type="checkbox" label="Washing Machine" />
            <Forms id="Water Heater"type="checkbox" label="Water Heater" />
            <Forms id="AC"type="checkbox" label="AC" />
            <Forms id="Locker"type="checkbox" label="Locker" />
            <Forms id="Fan"type="checkbox" label="Fan" />
            <Forms id="WiFi"type="checkbox" label="WiFi" />
            </div>
        </div>

        <div>
          <h3>Hostel Preferred For</h3>
            
          <Forms  id="Student" type="checkbox" label="Student"/>  
          <Forms id="Employee" type="checkbox" label="Employee"/>      
          <Forms id="Both"type="checkbox" label="Both" />
        </div>
        <div>
          <h3>Hostel Available For</h3>
            
          <Forms  id="Boys" type="checkbox" label="Boys"/>  
          <Forms id="Girls" type="checkbox" label="Girls"/>      
          <Forms id="Both"type="checkbox" label="Both" />
        </div>
        <div>
          <h3>Cleaning Services</h3>
            
          <Forms  id="Daily House Cleaning" type="checkbox" label="Daily House Cleaning"/>  
          <Forms id="Laundry" type="checkbox" label="Laundry"/>      
          <Forms id="Dry Cleaning"type="checkbox" label="Dry Cleaning" />
          <Forms id="Ironing Service"type="checkbox" label="Ironing Service" />
        </div> 
        <div>
          <h3>Facilities</h3>
            
          <Forms  id="Parking" type="checkbox" label="Parking"/>  
          <Forms id="Powerbackup" type="checkbox" label="Powerbackup"/>      
          <Forms id="Furniture"type="checkbox" label="Furniture" />
          <Forms id="Terrace"type="checkbox" label="Terrace" />
        </div> 
        <div>
          <h3>Charges Included</h3>
            
          <Forms  id="Electricity" type="checkbox" label="Electricity"/>  
          <Forms id="Washing Machine" type="checkbox" label="Washing Machine"/>      
          <Forms id="Maintainance"type="checkbox" label="Maintainance" />
        </div>
        <div>
          <h3>Security</h3>
            
          <Forms  id="CCTV" type="checkbox" label="CCTV"/>  
          <Forms id="Security Guard" type="checkbox" label="Security Guard"/>      
        </div>
        <div>
          <h3>Home Rules</h3>
            
          <Forms  id="Smoking" type="checkbox" label="Smoking"/>  
          <Forms id="Drinking" type="checkbox" label="Drinking"/> 
          <Forms id="Hostel Timing" type="checkbox" label="Hostel Timing"/>     
        </div>
        <div><label htmlFor="CustomFacilities">Custom Facilities</label>
            <textarea
              id="CustomFacilities"
              type="text"
              value={Facilities}
              onChange={(e) => setFacilities(e.target.value)}
            ></textarea></div>
            <Link to='/'>
            <Button name="Save & Finish"></Button>

            </Link>
      </form>
    </Fragment>
  );
};
export default Features;