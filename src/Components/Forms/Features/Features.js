import React, { Fragment,Component } from 'react';
import CheckBox from './Checkbox'

export class Features extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlfor="Ammenties"><b>Ammenties</b></label>
                    <input type="checkbox"><label>RO</label></input>
                   
                    
                </div>
                <div>
                    <label htmlfor="Preferance"><b>Hostel Preferred For</b></label>
                </div>
                <div>
                    <label htmlfor="Availability"><b>Hostel Available For</b></label>
                </div>
                <div>
                    <label htmlfor="Charges"><b>Charges</b></label>
                </div>
                <div>
                    <label htmlfor="Security"><b>Security</b></label>
                </div>
                <div>
                    <label htmlfor="Home Rules"><b>Home Rules</b></label>
                </div>
                <div>
                    <label htmlfor="Cleaning Services"><b>Cleaning Services</b></label>
                </div>
                <div>
                    <label htmlfor="Facilities"><b>Facilities</b></label>
                </div>
                <CheckBox/>
        
                
                       
                
            </Fragment>
        )
    }
}

export default Features
