import React from 'react';
import Mainslide from './totaldata/Mainslide';
import Total from './totaldata/Total';
import Phone from './totaldata/Phone'
import Cloth from './totaldata/Cloth';
import './About.css'
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Grocery from './totaldata/Grocery';
import Shopcard from './totaldata/Shopcard'
import { CartProvider } from 'react-use-cart';
import Headerbar from './Headerbar';
import './totaldata/total.css'
const Home = () => {
    return (
        <div >      
        <Mainslide/>
        <Phone/>   
       
        <Total/>
        <Router>
        <CartProvider>
        <Route path='/' component={Cloth}></Route>
        <Route path='/shopcard' component={Shopcard}></Route>
        </CartProvider>
        </Router> 
        <Grocery/>
       </div>
    );
}

export default Home;
