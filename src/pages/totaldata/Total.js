import React from 'react';
import products from './Product';
import './total.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card,Button,Container} from 'react-bootstrap'
import { HomeWrapper } from './style';
const Total = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,   
    slidesToScroll: 1,
   autoplay:true,
   slidesToShow:5,
   
   responsive:[
     {
       breakpoint:1200,
       settings:{
         slidesToShow:4,
       }
     },
     {
      breakpoint:550,
      settings:{
        slidesToShow:3,
      }
    }, 
     {
      breakpoint:357,
      settings:{
        slidesToShow:2,
      }
    }

   ]
   
  };
 
  return (
    <div>
    <div className="headertop">
    <div className="container ">
      <div className="row">
    <div className="text col-6">
  <h6>electrical</h6>
    </div>
    <div className=" btndiv col-6 ">
   <button className=" btn-danger  btn"><a href="/techo"> view more</a></button>
   </div>
   </div>
    </div>
    </div>
 
    <Slider  {...settings}  className='slider'>
   
    {
       products.map((a)=>{
         return <div>

         <React.Fragment>
        
         <div className='innerdata'>
          <img src={a.img} alt="" />
          <div className="desc">{a.desc}</div> 
          <a href="/shopcard"><Button variant="danger">Buy</Button></a>
      
          </div>
       </React.Fragment>
       </div>
       })

      }

</Slider>
  
    </div>
  );
}

export default Total;
