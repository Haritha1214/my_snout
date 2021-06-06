import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Carousel from './Components/Carousel/Carousel'
import Description from './Components/Description/Description';
import RoomDetails from './Components/Forms/RoomDetails';
import Photos from './Components/Forms/Photos/Photos';
import Photoimplement from './Components/Forms/Photos/Photoimplement';
import Features from './Components/Forms/Features/Features'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Carousel}/>
                    <Route  path="/des" component={Description}/>
                    <Route  path="/room" component={RoomDetails}/>
                    <Route  path="/photos" component={Photos}/>
                    
                    <Route  path="/preview" component={Photoimplement}/>
                    <Route  path="/features" component={Features}/>

                </Switch>
            
            
            
            
            </BrowserRouter>

        </div>
    );
};

export default App;