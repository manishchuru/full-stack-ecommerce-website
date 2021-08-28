import React from 'react';

import { Card ,Button} from 'react-bootstrap';
import Clothapi from './Clothapi';
import './Phoneall.css';


const Clothall = () => {
    return (
        <div className='allphones'>
            {
                Clothapi.map((a)=>{
                    return <div className='cardtotal'>
                    <Card  >
  <Card.Img variant="top" src={a.img}  />
  <Card.Body>
  
    <Card.Text>
    Men cloths in wooden walk in closet
    </Card.Text>
    <a href="/shopcard"><Button variant="primary">Buy</Button></a>
           
  </Card.Body>
</Card>
                    </div>
                })
            }
        </div>
    );
}
;
export default Clothall
