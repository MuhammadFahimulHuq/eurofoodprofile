import React from 'react';
import mainbackground from '../Asset/images/mainbackground.jpg'
import mainbackground1 from '../Asset/images/mainbackground1.jpg'
import { Carousel } from 'react-bootstrap';
import './Carasoul.css'
export const Carasoul = () => {
  return <div > 
<Carousel indicators={false}>
  <Carousel.Item>
    <img
     
      className="d-block w-100"
      src={mainbackground}
      alt="First slide"
      style={{ filter: 'blur(2px)', webkitFilter: 'blur(2px)'}}
    />
    <Carousel.Caption>
      <h2 className="carasoul-header">ENSURING THE HIGHEST QUALITY</h2>
      <p className="carasoul-subtitle">Wholesale suppliers to the catering industry, restaurants
and specialist supermarkets.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mainbackground1}
      alt="Second slide"
      style={{ filter: 'blur(2px)', webkitFilter: 'blur(2px)'}}
    />

    <Carousel.Caption>
    <h2 className='carasoul-header'>ENSURING THE HIGHEST QUALITY</h2>
      <p className='carasoul-subtitle'>Wholesale suppliers to the catering industry, restaurants
and specialist supermarkets.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  </div>;
};
