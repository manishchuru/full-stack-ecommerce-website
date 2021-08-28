import React from 'react';
import { Carousel } from 'react-bootstrap';
const Mainslide = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
     </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thumbs.dreamstime.com/b/big-data-analytics-bi-business-intelligence-concept-chart-graph-icons-virtual-screen-big-data-analytics-bi-business-126811848.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thumbs.dreamstime.com/b/word-cloud-terms-big-data-technologie-35998837.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default Mainslide;
