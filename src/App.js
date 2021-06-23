import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carousel from "./Components/Carousel/Carousel";
import Description from "./Components/Description/Description";
import Photos from "./Components/Forms/Photos/Photos";
import Photoimplement from "./Components/Forms/Photos/Photoimplement";
import Features from "./Components/Forms/Features/Features";
import HostelDetails from "./Components/Forms/HostelDetails/HostelDetails";
import RoomsAvailable from "./Components/Forms/RoomsAvailable/RoomsAvailable";
import MyHostel from "./Components/Update/MyHostel";
import UpdateHostelDetails from "./Components/Update/UpdateHostelDetails";
import UpdateRoomsAvailable from "./Components/Update/UpdateRoomsAvailable";
import UpdatePhotoimplement from "./Components/Update/UpdatePhotoimplement";
import UpdateFeatures from "./Components/Update/UpdateFeatures";
import LoginSignUp from "./Components/Auth/LoginSignUp";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          

          <Route exact path="/" component={Carousel} />
          <Route path="/des" component={Description} />
          <Route path="/LoginSignUp" component={LoginSignUp} />

          <Route path="/photos" component={Photos} />
          <Route path="/MyHostel" component={MyHostel} />
          <Route path="/HostelDetails" component={HostelDetails} />
          <Route path="/Rooms" component={RoomsAvailable} />
          <Route path="/preview" component={Photoimplement} />
          <Route path="/features" component={Features} />
          <Route path="/UpdateHostelDetails" component={UpdateHostelDetails} />
          <Route path="/UpdateRooms" component={UpdateRoomsAvailable} />
          <Route path="/Updatepreview" component={UpdatePhotoimplement} />
          <Route path="/Updatefeatures" component={UpdateFeatures} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
