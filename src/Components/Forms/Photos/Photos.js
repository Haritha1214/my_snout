import React, { Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import Photoss from './PhotoContainer';


class Photos extends React.Component {
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
        
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/photos' />
        }
      }
      kit=()=>{
        return(<><h3>Kitchen Pics</h3>
          <Photoss/></>)
      }
     
    
        render(){
        return (
            <Fragment>
                <div className="images__upload">
                    <h3 className="label">Hostel Pics</h3>
                    {this.renderRedirect()}
                    <button className="btn__pics" onClick={this.setRedirect } target="_blank">Add Hostel Pictures</button>
                </div>
                <div className="images__upload"> 
                    {/* <label htmlfor="Kitchen Pics"><b>Kitchen Pics</b></label> */}
                    {/* <input style={{display:"none"}} type="file" onChange={this.fileHandler}
                    ref={fileInput=>this.fileInput=fileInput} /> */}
                    <h3 className="label">Kitchen Pics</h3>
                    {this.renderRedirect()}
                    <button className="btn__pics" id="kitchen" onClick={this.kit }>Add Kitchen Pictures</button>
                </div>
                <div className="images__upload"> 
                    <h3 className="label">Menu Pics</h3>
                    {this.renderRedirect()}
                    <button className="btn__pics" onClick={this.setRedirect }>Add Menu Pictures</button>
                   
                </div>

                <div>
                    <button className="btn__pics__submit">Save And Continue</button>
                </div>
        </Fragment>
    
        )
    }
}


export default Photos;
