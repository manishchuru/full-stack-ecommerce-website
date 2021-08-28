import React from 'react';
import './header.css';
import {BsPhone } from 'react-icons/bs';
const Headerbar = () => {
    return (
        <div>
            <div className="header">
            <div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.LMNFN3P-EsSyfFb1GjUqSAHaEK&pid=Api&rs=1&c=1&qlt=95&w=193&h=108" alt="" />
           
             <img src="https://m.media-amazon.com/images/I/71MHTD3uL4L._FMwebp__.jpg" alt=""  className='secondimage'/>
            <img src="https://media.gettyimages.com/photos/womens-clothing-with-personal-accessories-isolated-on-white-picture-id1128905977?k=6&m=1128905977&s=612x612&w=0&h=SDkSctAiOM2-4G0yMHlYSO-CzkzyRdffJlTPH85kFFw=" alt="" className='secondimage'></img>
            <img src="https://sp.yimg.com/ib/th?id=OP.%2biz9IcBkJ8ekZA474C474&o=5&pid=21.1&w=114&h=114" alt=""className='secondimage'  /> 
           <img src="https://tse2.mm.bing.net/th?id=OIP.D7lLC7cs5NevX5X6z0LciwHaE8&pid=Api&P=0&w=227&h=152" alt=""className='secondimage' />
          </div>
            <div className="imagetext">
          <p className='allspan'><span>Top offer</span><span className='cloth'><a href="/phoneapi"> mobile</a></span> <span className='cloth'><a href="/clothall">
          cloth  </a></span><span className='cloth'> <a href="/techo">electorics</a></span><span className='cloth'><a href="/grocery">Grocery</a></span></p>
            </div>
             </div>
            
        </div>
    );
}

export default Headerbar;
