import React from 'react';
import  "./Carousel.css";
import { Link } from "react-router-dom";
 


const Carousel = () => {
    return (
        <div className="banner">
            <div className="content">
              <blockquote><em>"JOIN AND GROW WITH OUR FAST GROWING COMMUNITY"</em></blockquote>
              <div>
              <Link to="/HostelDetails">  
              <button className="button"><span className="fill_colour"></span>ADD HOSTEL</button>
             </Link>
             <Link to="/MyHostel">  
              <button className="button"><span className="fill_colour"></span>MY HOSTEL</button>
             </Link>
              </div>
            </div>
            
            
            
            
        </div>
       
    );
};

export default Carousel;