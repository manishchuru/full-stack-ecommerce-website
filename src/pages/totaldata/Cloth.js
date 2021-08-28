import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './cloth.css'
import './total.css'
import {useCart} from 'react-use-cart';
import Clothapi from './Clothapi';
import {Button} from 'react-bootstrap'
const Cloth = () => {
  const {addItem} = useCart();
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
  <h5> Treanding cloth</h5>
    </div>
    <div className=" btndiv col-6 ">
   <button className=" btn-danger  btn"><a href="/clothall"> view more</a></button>
   </div>
   </div>
    </div>
    </div>
    <Slider  {...settings}  className='slider'>
      {
      Clothapi.map((value,index)=>{
         return <div>
        <React.Fragment>
         <div className='innerdata'>
          <img src={value.img} alt="" />
          <div className="desc">{value.desc}</div>
          <h6>${value.price}</h6>
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

export default Cloth;
