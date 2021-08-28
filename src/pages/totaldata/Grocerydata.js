import React from 'react';

import { Card ,Button} from 'react-bootstrap';
import Groceryapi from './Groceryapi';
import './Phoneall.css';
import Phoneapi from './Phoneapi';
const Grocerydata = () => {
    return (
        <div className='allphones'>
            {
                Groceryapi.map((a)=>{
                    return <div className='cardtotal'>
                    <Card  >
  <Card.Img variant="top" src={a.img}  />
  <Card.Body>
    
    <Card.Text>
    Healthy food background from fruits, vegetables, cereal, nuts and superfood. Dietary and balanced vegetarian eating products
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
export default Grocerydata;
