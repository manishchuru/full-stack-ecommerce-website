// import React, { useState } from 'react';
// import './Navbar.css'
// import { BiSearchAlt2 } from 'react-icons/bi';
// import {RiAccountPinCircleLine} from 'react-icons/ri';
// import {FiShoppingCart} from 'react-icons/fi';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import {MdCancel} from 'react-icons/md'
// import { Dropdown ,DropdownButton ,Button,ButtonGroup} from 'react-bootstrap';
// const Topbar = () => { 
//   const [ismobile,setMobile] = useState(false);
//     return (
//        <>
//        <div className="navbar">   
//        <button  className='giburger' onClick={()=>setMobile(!ismobile)}>{ismobile?<MdCancel  className='shopenjoy'/>:<GiHamburgerMenu  className='shopenjoy'/>}</button>
//         <p id='h2' className='manish'><a href="/"> manish</a></p> 
//         <ul className={ismobile?'navbar-mobile-links':'navbar-links'}>
//         <li  className='home'>
//         <a href="/">Home</a>
//         </li>
       
//          <li><a href="/signup"><Button varient='danger'>signup</Button></a>
//          </li>
//          </ul>
//        <a href="/shopcard"  className='shopcard'>
//        <FiShoppingCart/>
//        </a>
      
//        </div>
  
     
      
//        </>
//     );
// }

// export default Topbar;




import React from 'react';
import './Navbar.css'
import {CgShoppingCart} from 'react-icons/cg'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
const Topbar = () => {
  return (
    <div>
    <Navbar bg-dark className='navba' expand="lg">
    <Navbar.Brand href="/"><h2>manish</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto  my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signup"  id="signup">
          Signup
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        
      </Form>
      <CgShoppingCart  id='nowadd'/>
     </Navbar.Collapse>
     
  </Navbar>
  
    </div>
  );
}

export default Topbar;
