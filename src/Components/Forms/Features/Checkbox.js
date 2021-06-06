import React,{Fragment,useState} from 'react';
import Features from './Features';



const Checkbox=()=>{
    const data=[
        
            {option:"RO",id:1},
            {option:"Mess",id:2},
            {option:"Water",id:3}
        
    ]
    const[options]=useState(data)
    return(
        <Fragment>
            <Features options={options} value="Select"/>

        </Fragment>
    )
}
export default Checkbox;