import React from 'react';
import Phoneapi from './Phoneapi';
import { Card ,Button} from 'react-bootstrap';
import './Phoneall.css';

const phoneall = () => {
    return (
        <div className='allphones'>
            {
                Phoneapi.map((a)=>{
                    return <div className='cardtotal'>
                    <Card  >
  <Card.Img variant="top" src={a.img}  />
  <Card.Body>
    <Card.Text>
    <p>
    Compatible Phone Models	TCL 10 5G UW
    Brand	TUDIA
    Color	Matte Black
    Material	Polycarbonate, Thermoplastic Polyurethane</p>
  
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

export default phoneall;
