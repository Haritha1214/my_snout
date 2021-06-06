import React, { Component,Fragment } from 'react'
import Photoss from './PhotoContainer';
export class Photoimplement extends Component {
    render() {
        return (
            <Fragment>
                <h3>Hostel Pics</h3>
                <Photoss/>
                <h3>Kitchen Pics</h3>
                <Photoss/>
                <h3>Menu Pics</h3>
                <Photoss/>
            </Fragment>
        )
    }
}

export default Photoimplement
