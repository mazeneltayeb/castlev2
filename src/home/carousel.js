import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from "./carousel-img/1.jpg"
import imgTwo from "./carousel-img/2.jpg"
import imgThree from "./carousel-img/3.jpg"
import imgFour from "./carousel-img/4.jpg"
import imgFive from "./carousel-img/5.jpg"
import imgSix from "./carousel-img/6.jpg"
import "./home.css"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='banner-carousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={imgOne} alt='Error' className='img-fluid'/>
      <img src={imgTwo} alt='Error' className='img-fluid'/>
        <Carousel.Caption className='d-flex  flex-column justify-content-evenly align-items-center'>
          <h1>Luxury Dining Room</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item>
      <img src={imgFour} alt='Error' className='img-fluid'/>
      <img src={imgThree} alt='Error' className='img-fluid'/>
        <Carousel.Caption className='d-flex  flex-column justify-content-evenly align-items-center'>
        <h1>Luxury Dining Room</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgSix} alt='Error' className='img-fluid'/>
      <img src={imgFive} alt='Error' className='img-fluid'/>
        <Carousel.Caption className='d-flex  flex-column justify-content-evenly align-items-center'>
        <h1>Luxury Dining Room</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;