import React, { Component,Fragment } from 'react'
import Photoss from '../Forms/Photos/PhotoContainer';
import Button from "../Reusable/Button";
import NavBtn from "../Reusable/NavBtn";
import { Link } from "react-router-dom";

export class Photoimplement extends Component {
    render() {
        return (
            <Fragment>
               <div>
           
           <NavBtn
           cls3="btn active"
             link1="/UpdateHostelDetails"
             link2="/UpdateRooms"
             link3="/Updatepreview"
             link4="/Updatefeatures"
           />
         </div>
                <h3>Photos</h3>
                <h3>Hostel Pics</h3>
                <Photoss/>
                <h3>Kitchen Pics</h3>
                <Photoss/>
                <h3>Menu Pics</h3>
                <Photoss/>
                <Link to="/Updatefeatures">
             <Button name="Save & Continue"></Button>
          </Link> 
            </Fragment>
        )
    }
}

export default Photoimplement
