import React from 'react';
import Product from './Product';
import { Card ,Button} from 'react-bootstrap';import './product.css'

const Totalall = () => {
    return (
        <div className='allphones'>
            {
                Product.map((a)=>{
                    return <div className='cardtotal'>
                    <Card  >
  <Card.Img variant="top" src={a.img}  />
  <Card.Body>
   
    <Card.Text>
ThinkPad E14 Gen2 Ryzen 5 Hexa Core 4650U 5th Gen - (8 GB/256 GB SSD/Windows 10 Home) E14 Laptop  (14 inch, Black, 1.59 KG, With MS Office)
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

export default Totalall;
