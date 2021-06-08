import React from 'react';
import './Banner.css'
import banner1 from '../../images/girl-removebg-preview.png'


const Banner = ()=>{
    return(
        <div className="banner">
           <div className="container">
               <div className="row">
                   <div className="banner-image">
                        <img src={banner1} alt="banner" />
                   </div>
                   <div className="banner-text">
                       <h4>Enjoy this offer today</h4>
                       <h1>New Collenction <br /> <span>Sale 55%</span> </h1>
                       <button className="reusbleBtn">Shop Now</button>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Banner;