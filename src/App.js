import React from 'react';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Topbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import Headerbar from './pages/Headerbar';
import {AiFillInstagram,AiFillYoutube} from 'react-icons/ai';
import {TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti';
import {MdPayment} from 'react-icons/md';
import {FcShipped,FcAbout,FcContacts} from 'react-icons/fc'
import './pages/About.css'

import phoneall from './pages/totaldata/phoneall';
import Clothall from './pages/totaldata/Clothall';
import Totalall from './pages/totaldata/Totalall';
import Grocerydata from './pages/totaldata/Grocerydata';
import Shopcard from './pages/totaldata/Shopcard';
const App = () => {
  return (
    <div>
      <Router>
      <Topbar/>
      <Headerbar/>
      <Route exact path='/' component={Home}></Route>
      
      <Route path='/signup' component={Signup}></Route>
      <Route path='/phoneapi' component={phoneall}></Route>
      <Route path='/clothall' component={Clothall}></Route>
      <Route path='/grocery' component={Grocerydata}></Route>
      <Route path='/shopcard' component={Shopcard}></Route>
     
      <Route path='/techo' component={Totalall}></Route>
     
      </Router>
      <div className="footer">
       <div className="container">
       <div className="row social-media">
       <div className="col-2">
         <h6> About</h6>
         <p><FcContacts/> contectus</p>
         <p><FcAbout/> aboutus</p>
       </div>
       <div className="col-2">
         <h6> Help</h6>
         <p><MdPayment/> payments</p>
         <p><FcShipped/> shipping</p>
       </div>
       <div className="col-2">
       <h6> Social</h6>
       <p><AiFillInstagram/> Instagram</p>
       <p><TiSocialFacebook/> facewook</p>
       <p><TiSocialTwitter/> twitter</p>
       <p><AiFillYoutube/> youTube</p>
     </div>

       </div>
       </div>
      </div>
    </div>
  );
}

export default App;
