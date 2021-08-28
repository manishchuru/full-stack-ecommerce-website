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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum beatae distinctio veritatis id! Excepturi suscipit nostrum earum deserunt fuga nisi. Consectetur tempore quis ut recusandae. Perferendis delectus deleniti impedit nobis repellat sint quia eligendi tempora libero vero excepturi asperiores aliquam, voluptatibus odit tenetur at ab, consectetur eveniet! Animi magnam velit tempore. Ad facere nisi iure perspiciatis repellendus earum harum corporis neque unde rerum accusamus veniam in quisquam ducimus quis magni quam quibusdam doloribus minus, maxime omnis eos et quas. Commodi maiores reprehenderit animi tempora soluta corrupti nobis quos quaerat cupiditate consequatur culpa, doloremque adipisci. Magnam nesciunt asperiores sunt dolorem?
        </div>
    );
}

export default Home;
