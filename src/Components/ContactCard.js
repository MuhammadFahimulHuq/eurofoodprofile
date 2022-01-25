import React from 'react';
import { Card } from 'react-bootstrap';
import address from '../Asset/images/address.gif'
import phone from '../Asset/images/phonelink-ring.gif'
import { ContactForm } from './ContactForm';
export const ContactCard = () => {
  return <div>
      <h3 className='heading'>
          OUR CONTACT
      </h3>
<div style={{display:'flex',justifyContent:'center'}}>
<Card className="text-center" style={{ width: '15rem' }} >
      <Card.Body>
    <Card.Title >HEAD OFFICE</Card.Title>
   
    <Card.Text >
    <img src={address}  alt='address' style={{width:'15px'}}/>Langland Way Reevesland Park Industrial Estate
    Newport, Gwent, NP19 4PT
    </Card.Text>
    <Card.Text >
      <img src={phone} alt="phone" style={{width:'15px'}}/>
    +01633636000
    </Card.Text>
  </Card.Body>
</Card>
<Card className="text-center" style={{ width: '15rem' }}>
      <Card.Body>
    <Card.Title >SAVAR BRANCH</Card.Title>
    <Card.Text >
    <img src={address}  alt='address' style={{width:'15px'}}/>
    Eurasia Food Processing (BD) Ltd
Bangladesh Office
Gouripur, Ashulia, Savar, Dhaka
    </Card.Text>
    <Card.Text >
    <img src={phone} alt="phone" style={{width:'15px'}}/>
    +8801715770840
    </Card.Text>
  </Card.Body>
</Card>
</div>
   
      
        

  <ContactForm />

  </div>;
};
