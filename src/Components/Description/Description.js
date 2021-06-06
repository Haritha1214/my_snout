import React from 'react';
import Cards from '../Reusable/Cards';
import DescriptionData from './DescriptionData';
import './Description.css'

class Description extends React.Component {
   constructor(){
       super();
       this.state={
           list:DescriptionData,
       }
   }
    render(){
        const result=this.state.list.map(res=><Cards key={res.id} title={res.title} description={res.description}/>)
    
    return (
        <div>
            <div className="ads">ADS</div>
            <div>
                <h2 className="content1">GROW WITH US</h2>
                <p id="content1"><i>"Come aboard India's No. 1 travel company & unfold infinite possibilities of growth"</i></p>

            </div>
            <div className="cards">
               {result}
            </div>
            <div className="content2">
                <p>Do you own any of the following property types which can be rented out to guest for vacation?<br></br>List with us now</p>
                <button className="button"><span className="fill_colour"></span>LIST YOUR PROPERTY</button>
            </div>


            
        </div>
    );}
};

export default Description;